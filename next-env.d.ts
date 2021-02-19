/// <reference types="next" />
/// <reference types="next/types/global" />

import { NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from 'firebase-admin'
import { RequestHandler } from 'express-serve-static-core'

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
