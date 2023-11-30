import getPostsByDate from '@/utils/getPostsByDate'
import Post from '@/components/Post'

interface ParamsType {
  view: 'day' | 'month'
  date: string
}

export default async function PostsPage({ params }: { params: ParamsType }) {
  const { view, date } = params

  const posts = await getPostsByDate(view, date)

  const alphabetDesc = (a: string, b: string) => b.localeCompare(a)

  const dates = Object.keys(posts).sort(alphabetDesc)

  return dates.map((date) => (
    <div key={posts[date][0].id}>
      <Post content={posts[date][0].content} />
    </div>
  ))
}
