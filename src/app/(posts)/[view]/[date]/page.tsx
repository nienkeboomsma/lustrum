import getPostsByDate from '@/utils/getPostsByDate'
import PostGroup from '@/components/Posts/PostGroup'
import Link from 'next/link'

interface ParamsType {
  view: 'day' | 'month'
  date: string
}

export default async function PostsPage({ params }: { params: ParamsType }) {
  const { view, date } = params
  const posts = await getPostsByDate(view, date)
  const dates = Object.keys(posts)

  if (dates.length === 0) {
    return 'Oops, nothing to show here'
  }

  if (view === 'day') {
    const alphabetDesc = (a: string, b: string) => b.localeCompare(a)
    dates.sort(alphabetDesc)
  }

  return dates.map((date) => (
    <PostGroup key={date} posts={posts[date]} view={view} date={date} />
  ))
}