'use client'

import styled, { css } from 'styled-components'
import Datepicker from './Datepicker'
import Tiptap from '../Tiptap/Tiptap'
import Button from './Button'
import { type ClientSidePost } from '@/utils/getPostsByDate'
import { useState } from 'react'
import { addPost, editPost } from '@/app/actions'

enum FormType {
  New = 'new',
  Edit = 'edit',
}

type NewPostAction = typeof addPost
type EditPostAction = typeof editPost

type NewPostProps = {
  action: NewPostAction
  type: FormType.New
  view: 'day' | 'month'
}

type EditPostProps = {
  type: FormType.Edit
  action: EditPostAction
  editablePost: ClientSidePost
}

export type PostFormProps = {
  closeModal: () => void
} & (NewPostProps | EditPostProps)

const Form = styled.form`
  color: ${({ theme }) => theme.s950};
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`

const DatepickerWrapper = styled.div`
  ${({ theme }) => css`
    .react-datepicker__input-container input {
      border: 1px solid ${theme.s500};
      border-radius: 4.5px;
      color: ${theme.s950};
      padding: 0.125rem 0.375rem;
      width: 100%;
    }
  `}
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
`

const compensateTimezoneOffset = (date: Date) => {
  // Datepicker localises the date to user's timezone
  // this makes sure it is displayed in UTC instead
  const timeOffset = date.getTimezoneOffset()
  const compensatedDate = new Date(date.valueOf() + timeOffset * 60 * 1000)
  return compensatedDate
}

export default function PostForm(props: PostFormProps) {
  const { action, closeModal, type } = props

  const view = type === FormType.New ? props.view : 'day'

  // the presence or absence of editablePost is a proxy for the 'type'
  // prop, because it is the discriminator between the two types
  const editablePost = type === FormType.Edit ? props.editablePost : undefined

  const defaultContent = editablePost ? editablePost.content : ''
  const [content, setContent] = useState(defaultContent)

  const defaultDate = editablePost
    ? compensateTimezoneOffset(editablePost.localDate)
    : new Date()
  const [date, setDate] = useState(defaultDate)

  const editPostActionWithParams = async () => {
    await (action as EditPostAction)(
      (editablePost as ClientSidePost).id,
      content,
      date
    )
    closeModal()
  }
  const addPostActionWithParams = async () =>
    (action as NewPostAction)(content, date, view)

  const formAction = editablePost
    ? editPostActionWithParams
    : addPostActionWithParams

  return (
    <Form action={formAction}>
      <DatepickerWrapper>
        <Datepicker aria-label='Date' defaultDate={date} onChange={setDate} />
      </DatepickerWrapper>
      <Tiptap
        aria-label='Post content'
        defaultContent={content}
        editable
        onUpdate={({ editor }) => setContent(editor.getJSON())}
        placeholder='How was your day?'
      />
      <ButtonsWrapper>
        <Button
          intent={Button.Intent.Secondary}
          onClick={closeModal}
          shadow={false}
          shape={Button.Shape.Rectangle}
          size={Button.Size.Medium}
          type='button'
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

PostForm.FormType = FormType
