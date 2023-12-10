'use client'

import styled from 'styled-components'
import PostWrapper from './PostWrapper'
import Tiptap from '../Tiptap/Tiptap'
import { type ClientSidePost } from '@/utils/getPostsByDate'

const Wrapper = styled(PostWrapper)`
  padding: 1.25rem 1.5rem;
`

export default function Post({ post }: { post: ClientSidePost }) {
  return (
    <Wrapper>
      <Tiptap content={post.content} editable={false} />
    </Wrapper>
  )
}
