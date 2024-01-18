'use client'

import styled from 'styled-components'
import OriginalPostWrapper from './PostWrapper'
import Tiptap from '../Tiptap/Tiptap'
import { type ClientSidePost } from '@/utils/getPostsByDate'
import { RiDeleteBinFill, RiPencilFill } from 'react-icons/ri'
import { deletePost, editPost } from '@/app/actions'
import useModal from '@/hooks/useModal'
import Modal from '../Modal/Modal'
import PostForm from '../Forms/PostForm'
import Alert from '../Modal/Alert'

type DeletePostAction = typeof deletePost
type EditPostAction = typeof editPost

type PostProps = {
  deletePostFn: DeletePostAction
  editPostFn: EditPostAction
  post: ClientSidePost
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  left: 0.95rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const PostWrapper = styled(OriginalPostWrapper)`
  padding: 1.5rem 1.75rem;
`

const Contents = styled.div`
  width: 33rem;
`

const ButtonsWrapper = styled.div`
  color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding-top: 0.6rem;

  ${Wrapper}:hover > & {
    color: ${({ theme }) => theme.s500};
    transition: color cubic-bezier(0.4, 0, 0.2, 1) 300ms;
  }
`

const Button = styled.button`
  all: unset;
  cursor: pointer;
  line-height: 0;

  & > svg {
    height: 1.1rem;
    width: 1.1rem;

    &:active {
      transform: translateY(1px);
      transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    }

    &:hover {
      color: ${({ theme }) => theme.s400};
    }
  }

  &:focus-visible {
    border-radius: 2px;

    & > svg {
      color: ${({ theme }) => theme.s500};
    }
  }
`

export default function Post({ deletePostFn, editPostFn, post }: PostProps) {
  const {
    visible: editVisible,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal()

  const {
    visible: deleteVisible,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal()

  const deletePostAndCloseModal = async () => {
    await deletePostFn(post)
    closeDeleteModal()
  }

  return (
    <>
      <Wrapper>
        <PostWrapper>
          <Contents>
            <Tiptap content={post.content} editable={false} />
          </Contents>
        </PostWrapper>
        <ButtonsWrapper>
          <Button aria-label='edit post' type='button' onClick={openEditModal}>
            <RiPencilFill />
          </Button>
          {/* TODO: add a toast for 'post successfully removed */}
          <Button
            aria-label='delete post'
            type='button'
            onClick={openDeleteModal}
          >
            <RiDeleteBinFill />
          </Button>
        </ButtonsWrapper>
      </Wrapper>
      <Modal closeModal={closeEditModal} visible={editVisible}>
        <PostForm
          action={editPostFn}
          editablePost={post}
          closeModal={closeEditModal}
          type={PostForm.FormType.Edit}
        />
      </Modal>
      <Modal closeModal={closeDeleteModal} visible={deleteVisible}>
        <Alert
          cancelButtonText='Cancel'
          confirmButtonText='Delete'
          content={'You will not be able to recover it.'}
          onCancel={closeDeleteModal}
          onContinue={deletePostAndCloseModal}
          title={'Delete this post?'}
        />
      </Modal>
    </>
  )
}
