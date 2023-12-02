import connectToDB from '@/services/mongodb'
import Post, { type ServerSidePost } from '@/models/posts'

export interface ClientSidePost {
  absoluteDate: Date
  timeOffset: Number
  localDate: Date
  content: object
  id: string
}

export type PostsByDate = Record<string, Array<ClientSidePost>>

export default async function getPostsByDate(
  view: 'day' | 'month',
  date: string
) {
  await connectToDB()

  const [day, month, year] = date.split('-')

  const query = {
    $expr: {
      $and: [
        view === 'day' ? { $eq: [{ $dayOfMonth: '$localDate' }, day] } : {},
        { $eq: [{ $month: '$localDate' }, month] },
        view === 'day' ? {} : { $eq: [{ $year: '$localDate' }, year] },
      ],
    },
  }

  const posts = await Post.find<ServerSidePost>(query).sort({
    localDate: 'asc',
  })

  const postsByDate: PostsByDate = posts
    .map((post) => {
      return post.toObject()
    })
    .reduce((obj: PostsByDate, post: ClientSidePost) => {
      const date = post.localDate
        .toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replaceAll('/', '-')

      if (date in obj) {
        obj[date].push(post)
      } else {
        obj[date] = [post]
      }

      return obj
    }, {})

  return postsByDate
}
