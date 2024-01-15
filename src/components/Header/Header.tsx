'use client'

import styled, { css } from 'styled-components'
import { hsla } from '@/utils/hsla'
import { getLocaleDate } from '@/utils/getLocaleDate'
import { RiAddLine } from 'react-icons/ri'
import { addPost } from '@/app/actions'
import useModal from '@/hooks/useModal'
import Modal from '../Forms/Modal'
import PostForm from '../Forms/PostForm'

type AddPostAction = typeof addPost

type HeaderProps = {
  addPostFn: AddPostAction
  date: string
  view: 'day' | 'month'
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.s500};
    box-shadow: 0 10px 15px -3px ${hsla(theme.s500, 0.3)},
      0 4px 6px -4px ${hsla(theme.s500, 0.3)};
    color: ${theme.s50};
    padding: 0.875rem;
    position: sticky;
    text-align: center;
    top: 0;
    width: 100vw;
    z-index: 1;
  `}
`

const Title = styled.h1`
  all: unset;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0.875rem;
  top: 0.875rem;
`

const AddButton = styled.button`
  all: unset;
  cursor: pointer;

  & > svg {
    height: 2rem;
    width: 2rem;

    &:active {
      transform: translateY(1px);
      transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    }

    &:hover {
      color: ${({ theme }) => theme.s200};
    }
  }
`

export default function Header({ addPostFn, date, view }: HeaderProps) {
  const displayDate =
    view === 'day'
      ? `${getLocaleDate(date, 'day')} ${getLocaleDate(date, 'month')}`
      : `${getLocaleDate(date, 'month')} ${getLocaleDate(date, 'year')}`

  const { visible, openModal, closeModal } = useModal()

  return (
    <>
      <Wrapper>
        <Title>{displayDate}</Title>
        <ButtonWrapper>
          <AddButton onClick={openModal}>
            <RiAddLine />
          </AddButton>
        </ButtonWrapper>
      </Wrapper>
      <Modal closeModal={closeModal} visible={visible}>
        <PostForm
          action={addPostFn}
          closeModal={closeModal}
          type={PostForm.FormType.New}
          view={view}
        />
      </Modal>
    </>
  )
}