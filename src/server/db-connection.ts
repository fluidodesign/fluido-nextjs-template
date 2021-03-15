import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

mongoose.set('autoCreate', true)
mongoose.set('toObject', { getters: true, virtuals: true })
mongoose.set('toJSON', { getters: true, virtuals: true })
mongoose.plugin(mongooseLeanVirtuals)

mongoose.connect(process.env.DATABASE_URL_MAIN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  poolSize: 2,
  socketTimeoutMS: 250,
  keepAlive: true,
})

export default mongoose.connection
