'use client'

import styled, { css } from 'styled-components'
import { RiAlertFill } from 'react-icons/ri'
import Button from '../Forms/Button'

type AlertProps = {
  cancelButtonText?: string
  confirmButtonText?: string
  content: string
  title: string
  onCancel: () => void
  onContinue: () => void
}

const Wrapper = styled.div`
  margin-top: -0.375rem;
  max-width: 27rem;
  min-width: 18rem;
  width: max-content;
`

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  padding-bottom: 0.5rem;

  &:empty {
    padding: 0;
  }
`

const Message = styled.p`
  padding-bottom: 1.5rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
`

export default function Alert({
  cancelButtonText,
  confirmButtonText,
  content,
  onCancel,
  onContinue,
  title,
}: AlertProps) {
  const cancelText = cancelButtonText ?? 'cancel'
  const confirmText = confirmButtonText ?? 'continue'

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Message>{content}</Message>
      <ButtonsWrapper>
        <Button
          aria-label={cancelText}
          intent={Button.Intent.Secondary}
          onClick={onCancel}
          shadow={false}
          shape={Button.Shape.Rectangle}
          size={Button.Size.Medium}
          type='button'
        >
          {cancelText}
        </Button>
        <Button
          aria-label={confirmText}
          intent={Button.Intent.Primary}
          onClick={onContinue}
          shadow={false}
          shape={Button.Shape.Rectangle}
          size={Button.Size.Medium}
          type='button'
        >
          {confirmText}
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}
