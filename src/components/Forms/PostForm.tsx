'use client'

import styled from 'styled-components'
import Datepicker from './Datepicker'
import Tiptap from '../Tiptap/Tiptap'
import Button from './Button'
import { type ClientSidePost } from '@/utils/getPostsByDate'

const Form = styled.form`
  color: ${({ theme }) => theme.s950};
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`

const StyledDatepicker = styled(Datepicker)`
  border: 1px solid ${({ theme }) => theme.s500};
  border-radius: 4.5px;
  padding: 0.125rem 0.375rem;
  width: 100%;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
`

export default function Postform({ post }: { post?: ClientSidePost }) {
  const initialDate = post ? post.localDate : new Date()
  const initialContent = post ? post.content : ''

  return (
    <Form>
      {/* change the onChange when implementing server actions */}
      <StyledDatepicker
        aria-label='Date'
        date={initialDate}
        onChange={() => {}}
      />{' '}
      <Tiptap aria-label='Post content' content={initialContent} editable />
      <ButtonsWrapper>
        <Button
          intent={Button.Intent.Secondary}
          shadow={false}
          shape={Button.Shape.Rectangle}
          size={Button.Size.Medium}
        >
          Cancel
        </Button>
        <Button
          intent={Button.Intent.Primary}
          shadow={false}
          shape={Button.Shape.Rectangle}
          size={Button.Size.Medium}
        >
          Submit
        </Button>
      </ButtonsWrapper>
    </Form>
  )
}
