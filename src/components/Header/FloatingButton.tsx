import styled from 'styled-components'
import Button from '../Forms/Button'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

const StyledButton = styled(Button)`
  align-items: center;
  border-radius: 50%;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  height: 2.75rem;
  padding: 0;
  position: fixed;
  right: 1rem;
  top: auto;
  width: 2.75rem;

  & > svg {
    height: 2rem;
    width: 2rem;
  }
`

export default function FloatingButton({
  children,
  ...rest
}: { children: ReactNode } & ComponentPropsWithoutRef<'button'>) {
  return (
    <StyledButton
      intent={Button.Intent.Primary}
      shadow={true}
      shape={Button.Shape.Lozenge}
      size={Button.Size.Medium}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
