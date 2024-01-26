'use client'

import styled, { css } from 'styled-components'
import { hsla } from '@/utils/hsla'
import { getLocaleDateFromString } from '@/utils/getLocaleDateFromString'
import { RiAddLine } from 'react-icons/ri'
import { addPost } from '@/app/actions'
import useModal from '@/hooks/useModal'
import Modal from '../Modal/Modal'
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
  line-height: 0;

  &:active {
    transform: translateY(1px);
    transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
  }

  &:focus-visible {
    border-radius: 0.25rem;
    outline: ${({ theme }) => theme.s50} solid 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.s200};
  }

  & > svg {
    height: 2rem;
    width: 2rem;
  }
`

export default function Header({ addPostFn, date, view }: HeaderProps) {
  const [localeDay, localeMonth, localeYear] = getLocaleDateFromString(date)
  const displayDate =
    view === 'day'
      ? `${localeDay} ${localeMonth}`
      : `${localeMonth} ${localeYear}`

  const { visible, openModal, closeModal } = useModal()

  return (
    <>
      <Wrapper>
        <Title>{displayDate}</Title>
        <ButtonWrapper>
          <AddButton aria-label='add post' onClick={openModal}>
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
