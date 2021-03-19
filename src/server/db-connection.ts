import mongoose, { Connection } from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

mongoose.set('autoCreate', true)
mongoose.set('bufferCommands', false)
mongoose.set('toObject', { getters: true, virtuals: true })
mongoose.set('toJSON', { getters: true, virtuals: true })
mongoose.plugin(mongooseLeanVirtuals)

const Conn = mongoose.connection
let PromiseResult: Promise<Connection> = null

if (!Conn.readyState) {
  console.log('connecting db')

  PromiseResult = mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      poolSize: 1,
      maxPoolSize: 1,
      socketTimeoutMS: 20000,
      serverSelectionTimeoutMS: 20000,
    })
    .then((m) => m.connection)
} else {
  PromiseResult = Promise.resolve(mongoose.connection)
}

export default PromiseResult
