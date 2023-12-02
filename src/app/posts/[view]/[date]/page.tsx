import getPostsByDate from '@/utils/getPostsByDate'
import PostGroup from '@/components/Posts/PostGroup'

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
    <PostGroup key={date} posts={posts[date]} view={view} date={date} />
  ))
}
