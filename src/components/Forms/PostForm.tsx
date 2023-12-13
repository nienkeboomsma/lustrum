'use client'

import styled from 'styled-components'
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
  onCancel: () => void
  type: FormType.New
  view: string
}

type EditPostProps = {
  action: EditPostAction
  editablePost: ClientSidePost
  onCancel: () => void
  type: FormType.Edit
  view: string
}

type PropTypes = NewPostProps | EditPostProps

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

const compensateTimezoneOffset = (date: Date) => {
  // Datepicker localises the date to user's timezone
  // this makes sure it is displayed in UTC instead
  const timeOffset = date.getTimezoneOffset()
  const compensatedDate = new Date(date.valueOf() + timeOffset * 60 * 1000)
  return compensatedDate
}

export default function PostForm(props: PropTypes) {
  const { action, onCancel, type, view } = props

  // the presence or absence of editablePost is a proxy for the 'type'
  // prop, because it is the discriminator between the two types
  let editablePost: ClientSidePost | undefined
  if (type === FormType.Edit) editablePost = props.editablePost

  const defaultContent = editablePost ? editablePost.content : ''
  const [content, setContent] = useState(defaultContent)

  const defaultDate = editablePost
    ? compensateTimezoneOffset(editablePost.localDate)
    : new Date()
  const [date, setDate] = useState(defaultDate)

  const actionWithParams = editablePost
    ? async () =>
        (action as EditPostAction)(
          (editablePost as ClientSidePost).id,
          content,
          date,
          view
        )
    : async () => (action as NewPostAction)(content, date, view)

  return (
    <Form action={actionWithParams}>
      <StyledDatepicker
        aria-label='Date'
        defaultDate={date}
        onChange={setDate}
      />
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
          onClick={onCancel}
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
