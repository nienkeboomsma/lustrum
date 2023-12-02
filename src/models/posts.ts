import mongoose from 'mongoose'

export interface ServerSidePost extends mongoose.Document {
  absoluteDate: Date
  timeOffset: Number
  localDate: Date
  content: object
}

const transformation = (
  _: ServerSidePost,
  returnedObj: Record<string, any>
) => {
  returnedObj.id = returnedObj._id.toString()
  delete returnedObj._id
  delete returnedObj.__v
  return returnedObj
}

const postSchema = new mongoose.Schema<ServerSidePost>(
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
  mongoose.models.Post<ServerSidePost> ??
  mongoose.model<ServerSidePost>('Post', postSchema)

export default Post
