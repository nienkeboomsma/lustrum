'use client'

import styled from 'styled-components'
import Tiptap from './Tiptap/Tiptap'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.s200},
    0 4px 6px -4px ${({ theme }) => theme.s200};
  color: ${({ theme }) => theme.s950};
  margin: auto;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
  text-align: left;
  width: 60ch;
`

export default function Post({ content }: { content: object }) {
  return (
    <Wrapper>
      <Tiptap content={content} editable={false} />
    </Wrapper>
  )
}
