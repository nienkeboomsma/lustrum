import mongoose from 'mongoose'

export interface PostType extends mongoose.Document {
  absoluteDate: Date
  timeOffset: Number
  localDate: Date
  content: object
}

const transformation = (_: PostType, returnedObj: Record<string, any>) => {
  returnedObj.id = returnedObj._id.toString()
  delete returnedObj._id
  delete returnedObj.__v
  return returnedObj
}

const postSchema = new mongoose.Schema<PostType>(
  {
    absoluteDate: Date,
    timeOffset: Number,
    localDate: Date,
    content: Object,
  },
  {
    toObject: {
      transform: transformation,
    },
    toJSON: {
      transform: transformation,
    },
  }
)

const Post =
  mongoose.models.Post<PostType> ?? mongoose.model<PostType>('Post', postSchema)

export default Post
