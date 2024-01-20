import getPostsByDate from '@/utils/getPostsByDate'
import Header from '@/components/Header/Header'
import PostGroup from '@/components/Posts/PostGroup'
import { addPost, deletePost, editPost } from '@/app/actions'
import KeyboardNavigation from '@/components/KeyboardNavigation'

interface ParamsType {
  view: 'day' | 'month'
  date: string
}

export default async function PostsPage({ params }: { params: ParamsType }) {
  const { view, date } = params
  const posts = await getPostsByDate(view, date)
  const dates = Object.keys(posts)

  if (view === 'day') {
    const alphabetDesc = (a: string, b: string) => b.localeCompare(a)
    dates.sort(alphabetDesc)
  }

  return (
    <>
      <KeyboardNavigation />
      <Header addPostFn={addPost} date={date} view={view} />
      {dates.map((date) => (
        <PostGroup
          key={date}
          date={date}
          deletePostFn={deletePost}
          editPostFn={editPost}
          posts={posts[date]}
          view={view}
        />
      ))}
    </>
  )
}
