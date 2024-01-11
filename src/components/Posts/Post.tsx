'use client'

import styled from 'styled-components'
import OriginalPostWrapper from './PostWrapper'
import Tiptap from '../Tiptap/Tiptap'
import { type ClientSidePost } from '@/utils/getPostsByDate'
import { RiDeleteBinFill, RiPencilFill } from 'react-icons/ri'
import { deletePost } from '@/app/actions'

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  position: relative;
  left: 0.95rem;
  width: max-content;
`

const PostWrapper = styled(OriginalPostWrapper)`
  padding: 1.5rem 1.75rem;
`

const ButtonsWrapper = styled.div`
  color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding-top: 0.6rem;

  ${Wrapper}:hover > & {
    color: ${({ theme }) => theme.s500};
  }
`

const Button = styled.button`
  all: unset;
  cursor: pointer;
  line-height: 0;

  & > svg {
    height: 1.1rem;
    width: 1.1rem;

    &:hover {
      color: ${({ theme }) => theme.s400};
    }
  }

  &:focus > svg {
    color: ${({ theme }) => theme.s500};
  }
`

export default function Post({ post }: { post: ClientSidePost }) {
  return (
    <Wrapper>
      <PostWrapper>
        <Tiptap defaultContent={post.content} editable={false} />
      </PostWrapper>
      <ButtonsWrapper>
        <Button aria-label='edit post' type='button'>
          <RiPencilFill />
        </Button>
        {/* TODO: add a toast for 'post successfully removed */}
        <Button
          aria-label='delete post'
          type='button'
          onClick={() => deletePost(post.id, post.localDate, 'day')} // TODO: pass actual view prop/param
        >
          <RiDeleteBinFill />
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}
