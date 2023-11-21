import getPostsByDate from '@/utils/getPostsByDate'

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
    <div key={posts[date][0].id}>{posts[date][0].localDate.toUTCString()}</div>
  ))
}
