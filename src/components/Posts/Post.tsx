'use client'

import styled from 'styled-components'
import Tiptap from '../Tiptap/Tiptap'
import { type ClientSidePost } from '@/utils/getPostsByDate'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.s200},
    0 4px 6px -4px ${({ theme }) => theme.s200};
  margin: auto;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
  text-align: left;
  width: 60ch;
`

export default function Post({ post }: { post: ClientSidePost }) {
  return (
    <Wrapper>
      <Tiptap content={post.content} editable={false} />
    </Wrapper>
  )
}
