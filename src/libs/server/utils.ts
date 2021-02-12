import cookie from 'cookie'
import cors from 'cors'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from './firebase-admin-init'

interface CustomResponse<T = any> extends NextApiResponse<T> {
  cookie: (key: string, value: any, opt?: object) => void
}

interface CustomRequest extends NextApiRequest {
  claimsRef: any
  userRef: any
  user: firebaseAdmin.auth.DecodedIdToken
  automation: boolean
  claims: {}
}

type RouterNext = (error?: Error) => void

type Router = (
  request: NextApiRequest,
  response: CustomResponse,
  next: RouterNext,
) => void

export const MiddlewareWrapper = (...routes: [NextApiHandler]) => {
  return async (request: NextApiRequest, response: CustomResponse) => {
    const setCookie = (key: string, value: any, opt: object = {}) => {
      const cookieSerialize = cookie.serialize(key, value, {
        path: '/',
        ...opt,
      })

      response.setHeader('Set-Cookie', cookieSerialize)
    }

    response.cookie = setCookie

    await [cors()].concat(routes).reduce(
      (promise: Promise<any>, fn: Router) =>
        promise.then(
          () =>
            new Promise((resolve, reject) => {
              fn(request, response, (result) => {
                if (result instanceof Error) {
                  return reject(result)
                }
                return resolve(result)
              })
            }),
        ),
      Promise.resolve(true),
    )
  }
}

export const routeVerifyToken = (
  req: CustomRequest,
  res: CustomResponse,
  next: RouterNext,
) => {
  let token: string
  req.claims = {}

  if (req && req.cookies && req.cookies[process.env.JWT_COOKIE_KEY]) {
    token = req.cookies[process.env.JWT_COOKIE_KEY]
  }
  if (!token && req && req.headers && req.headers['x-token']) {
    token = req.headers['x-token'] as string
  }
  if (!token && req && req.query && req.query['token']) {
    token = req.query['token'] as string
  }

  if (!token) {
    let authParam: string = (req.headers['authorization'] ||
      req.headers['Authorization']) as string
    if (/^bearer .*$/i.test(authParam)) {
      token = authParam.split(' ')[1]
    }
  }

  if (token) {
    if (process.env.AUTOMATION_KEYS.split(/;\s*/).includes(token)) {
      req.automation = true
      next()
    } else {
      req.automation = false
      firebaseAdmin
        .auth()
        .verifyIdToken(token)
        .then(async (user) => {
          req.user = user
          req.userRef = firebaseAdmin.database().ref(`users/${user.uid}`)
          req.claimsRef = req.userRef.child('claims')
          req.claims = (await req.claimsRef.once('value')).val() || {}
          next()
        })
        .catch(() => next())
    }
  } else {
    next()
  }
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const filterMethod = (method: Method = 'GET') => {
  return (req: CustomRequest, res: CustomResponse, next: RouterNext) => {
    if (req.method !== method) {
      res.setHeader('Allow', [method])
      res.status(405).json({ message: 'method-not-allowed' })
    } else {
      next()
    }
  }
}
