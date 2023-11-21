import mongoose from 'mongoose'

let isConnected = false

export default async function connectToDB() {
  if (isConnected) return
  if (!process.env.MONGODB_URI) throw new Error('Supply a .env file!')

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Successfully connected to MongoDB')
    isConnected = true
  } catch (err) {
    console.log(err)
  }
}
