import { JSONSchema7 } from 'json-schema'
import { Validator } from 'express-json-validator-middleware'
import {
  CustomRequest,
  CustomResponse,
  MiddlewareWrapper,
  filterMethod,
  routeVerifyToken,
} from 'app-libs/server/utils'

const bodySchema: JSONSchema7 = {
  type: 'object',
  properties: {},
}

const validator = new Validator({ allErrors: true })

export default MiddlewareWrapper(
  filterMethod('POST'),
  routeVerifyToken,
  validator.validate({ body: bodySchema }),
  (request: CustomRequest, response: CustomResponse) => {
    if (!request.user)
      return response.status(401).json({ message: 'unauthorized' })

    Promise.resolve(true)
      .then(() => {
        response.status(200).json({ message: 'success' })
      })
      .catch((err) => {
        console.error(err)
        response.status(400).json({ message: 'invalid' })
      })
  },
)
