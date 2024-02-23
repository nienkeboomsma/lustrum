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
  defaultDate: Date
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
  width: min(75vw, 33rem);
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

  const newPostDefaultDate =
    type === FormType.New ? props.defaultDate : new Date()
  const view = type === FormType.New ? props.view : 'day'

  // the presence or absence of editablePost is a proxy for the 'type'
  // prop, because it is the discriminator between the two types
  const editablePost = type === FormType.Edit ? props.editablePost : undefined

  const defaultContent = editablePost ? editablePost.content : ''
  const [content, setContent] = useState(defaultContent)

  // replace straight apostrophes with curly apostrophes
  const contentOutput = JSON.parse(
    JSON.stringify(content).replace(/'(?<![a-z])/g, '’')
  )

  const defaultDate = editablePost
    ? compensateTimezoneOffset(editablePost.localDate)
    : compensateTimezoneOffset(newPostDefaultDate)
  const [date, setDate] = useState(defaultDate)

  const editPostActionWithParams = async () => {
    await (action as EditPostAction)(
      (editablePost as ClientSidePost).id,
      contentOutput,
      date
    )
    closeModal()
  }
  const addPostActionWithParams = async () => {
    await (action as NewPostAction)(contentOutput, date, view)
    closeModal()
  }

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
