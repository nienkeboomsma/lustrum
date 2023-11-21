import connectToDB from '@/services/mongodb'
import Post, { PostType } from '@/models/posts'

type PostsByDateType = Record<string, Array<PostType>>

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

  const posts = await Post.find<PostType>(query).sort({ localDate: 'asc' })

  const postsByDate: PostsByDateType = posts
    .map((post) => {
      return post.toObject()
    })
    .reduce((obj: PostsByDateType, post: PostType) => {
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
