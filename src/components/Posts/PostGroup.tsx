'use client'

import styled from 'styled-components'
import PostDate from './PostDate'
import Post from './Post'
import { type ClientSidePost } from '@/utils/getPostsByDate'

const Wrapper = styled.div`
  margin: 0rem auto 3rem;
  width: max-content;
`

interface PostGroupProps {
  posts: Array<ClientSidePost>
  view: 'day' | 'month'
  date: string
}

export default function PostGroup({ posts, view, date }: PostGroupProps) {
  return (
    <Wrapper>
      <PostDate view={view} date={date} />
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </Wrapper>
  )
}
