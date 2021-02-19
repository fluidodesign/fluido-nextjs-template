import { Schema } from 'mongoose'
import MainDataBase from 'app-libs/server/db-connection'

const MODEL_NAME = 'Template'

const getTemplateModel = () => {
  if (MODEL_NAME in MainDataBase.models) return MainDataBase.models[MODEL_NAME]

  const schema = new Schema()

  return MainDataBase.model(MODEL_NAME, schema)
}

export default getTemplateModel
