import { Schema } from 'mongoose'
import MainDataBase from 'app-libs/server/db-connection'

const MODEL_NAME = 'Template'

const getTemplateModel = () => {
  if (MODEL_NAME in MainDataBase.models) return MainDataBase.models[MODEL_NAME]

  const Template = getTemplateModel()

  const schema = new Schema({}, { discriminatorKey: 'discriminatorKey' })

  return Template.discriminator(MODEL_NAME, schema)
}

export default getTemplateModel
