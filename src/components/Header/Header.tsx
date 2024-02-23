'use client'

import styled, { css } from 'styled-components'
import { hsla } from '@/utils/hsla'
import getLocaleDateFromString from '@/utils/getLocaleDateFromString'
import { RiAddLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { addPost } from '@/app/actions'
import useModal from '@/hooks/useModal'
import Modal from '../Modal/Modal'
import PostForm from '../Forms/PostForm'
import Link from 'next/link'
import getAdjoiningDatePath from '@/utils/getAdjoiningDatePath'
import HeaderControl from './HeaderControl'
import FloatingButton from './FloatingButton'

type AddPostAction = typeof addPost

type HeaderProps = {
  addPostFn: AddPostAction
  date: string
  view: 'day' | 'month'
}

const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.s500};
    box-shadow: 0 10px 15px -3px ${hsla(theme.s500, 0.3)},
      0 4px 6px -4px ${hsla(theme.s500, 0.3)};
    color: ${theme.s50};
    display: flex;
    justify-content: center;
    padding: 0.875rem;
    position: sticky;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 1;
  `}
`

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
`

const Title = styled.h1`
  all: unset;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  width: 13rem;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0.875rem;
  top: 0.875rem;

  @media (max-width: 25rem) {
    display: none;
  }
`

const StyledFloatingButton = styled(FloatingButton)`
  display: none;

  @media (max-width: 25rem) {
    display: flex;
  }
`

export default function Header({ addPostFn, date, view }: HeaderProps) {
  const path = `/${view}/${date}`

  const [localeDay, localeMonth, localeYear] = getLocaleDateFromString(date)
  const displayDate =
    view === 'day'
      ? `${localeDay} ${localeMonth}`
      : `${localeMonth} ${localeYear}`

  const { visible, openModal, closeModal } = useModal()

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <HeaderControl>
            <Link
              aria-label={`go to previous ${view}`}
              href={getAdjoiningDatePath(-1, path)}
            >
              <RiArrowLeftSLine />
            </Link>
          </HeaderControl>
          <Title>{displayDate}</Title>
          <HeaderControl>
            <Link
              aria-label={`go to next ${view}`}
              href={getAdjoiningDatePath(1, path)}
            >
              <RiArrowRightSLine />
            </Link>
          </HeaderControl>
        </TitleWrapper>
        <ButtonWrapper>
          <HeaderControl>
            <button aria-label='add post' onClick={openModal}>
              <RiAddLine />
            </button>
          </HeaderControl>
        </ButtonWrapper>
        <StyledFloatingButton aria-label='add post' onClick={openModal}>
          <RiAddLine />
        </StyledFloatingButton>
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
