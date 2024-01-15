'use client'

import styled from 'styled-components'
import PostDate from './PostDate'
import Post from './Post'
import { type ClientSidePost } from '@/utils/getPostsByDate'
import { deletePost, editPost } from '@/app/actions'

const Wrapper = styled.div`
  margin: 0rem auto 2rem;
  width: max-content;
`

type DeletePostAction = typeof deletePost
type EditPostAction = typeof editPost

interface PostGroupProps {
  date: string
  deletePostFn: DeletePostAction
  editPostFn: EditPostAction
  posts: Array<ClientSidePost>
  view: 'day' | 'month'
}

export default function PostGroup({
  date,
  deletePostFn,
  editPostFn,
  posts,
  view,
}: PostGroupProps) {
  return (
    <Wrapper>
      <PostDate view={view} date={date} />
      {posts.map((post) => (
        <Post
          key={post.id}
          deletePostFn={deletePostFn}
          editPostFn={editPostFn}
          post={post}
        ></Post>
      ))}
    </Wrapper>
  )
}
