import { Validator } from 'express-json-validator-middleware'
import {
  filterMethod,
  MiddlewareWrapper,
  routeVerifyToken,
} from 'app-api/utils'

/**
 * @type { import('json-schema').JSONSchema7 }
 */
const bodySchema = {
  type: 'object',
  properties: {},
}

const validator = new Validator({ allErrors: true })

export default MiddlewareWrapper(
  filterMethod('POST'),
  routeVerifyToken,
  validator.validate({ body: bodySchema }),
  function (req, res) {
    if (!req.user) return res.status(401).json({ message: 'unauthorized' })

    Promise.resolve(true)
      .then(() => {
        res.status(200).json({ message: 'success' })
      })
      .catch((err) => {
        console.error(err)
        res.status(400).json({ message: 'invalid' })
      })
  },
)
