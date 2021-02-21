import cookie from 'cookie'
import cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { RequestHandler } from 'express-serve-static-core'
import firebaseAdmin from './firebase-admin-init'

interface AppResponse<T = any> extends Express.Response, NextApiResponse<T> {
  cookie: (key: string, value: any, opt?: object) => void
}

interface AppRequest extends Express.Request, NextApiRequest {
  claimsRef: any
  userRef: any
  user: firebaseAdmin.auth.DecodedIdToken
  automation: boolean
  claims: {}
}

type AppRouterNext = (error?: Error) => void

type CustomHandler = (
  request: AppRequest,
  response: AppResponse,
  next?: AppRouterNext,
) => void | any | Promise<void> | Promise<any>

type AppHandler = CustomHandler | RequestHandler

export const MiddlewareWrapper = (...routes: AppHandler[]) => {
  return async (request: AppRequest, response: AppResponse) => {
    const setCookie = (key: string, value: any, opt: object = {}) => {
      const cookieSerialize = cookie.serialize(key, value, {
        path: '/',
        ...opt,
      })

      response.setHeader('Set-Cookie', cookieSerialize)
    }

    response.cookie = setCookie

    await [cors()].concat(routes).reduce(
      (promise: Promise<any>, fn) =>
        promise.then(
          () =>
            new Promise((resolve, reject) => {
              fn(request, response, (result: any) => {
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

export const routeVerifyToken: AppHandler = (
  request: AppRequest,
  response: AppResponse,
  next?: AppRouterNext,
) => {
  let token: string
  request.claims = {}

  if (
    request &&
    request.cookies &&
    request.cookies[process.env.JWT_COOKIE_KEY]
  ) {
    token = request.cookies[process.env.JWT_COOKIE_KEY]
  }
  if (!token && request && request.headers && request.headers['x-token']) {
    token = request.headers['x-token'] as string
  }
  if (!token && request && request.query && request.query['token']) {
    token = request.query['token'] as string
  }

  if (!token) {
    let authParam: string = (request.headers['authorization'] ||
      request.headers['Authorization']) as string
    if (/^bearer .*$/i.test(authParam)) {
      token = authParam.split(' ')[1]
    }
  }

  if (token) {
    if (process.env.AUTOMATION_KEYS.split(/;\s*/).includes(token)) {
      request.automation = true
      next()
    } else {
      request.automation = false
      firebaseAdmin
        .auth()
        .verifyIdToken(token)
        .then(async (user) => {
          request.user = user
          request.userRef = firebaseAdmin.database().ref(`users/${user.uid}`)
          request.claimsRef = request.userRef.child('claims')
          request.claims = (await request.claimsRef.once('value')).val() || {}
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
  return ((req: AppRequest, res: AppResponse, next?: AppRouterNext) => {
    if (req.method !== method) {
      res.setHeader('Allow', [method])
      res.status(405).json({ message: 'method-not-allowed' })
    } else {
      next()
    }
  }) as AppHandler
}
