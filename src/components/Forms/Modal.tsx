import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PostWrapper from '../Posts/PostWrapper'
import { hsla } from '@/utils/hsla'

type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
  visible: boolean
}

const OuterContainer = styled.div`
  backdrop-filter: blur(6px);
  background-color: ${({ theme }) => hsla(theme.s200, 0.5)};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

const InnerContainer = styled(PostWrapper)`
  height: min-content;
  inset: 0;
  margin: auto;
  position: absolute;
`

export default function Modal({ children, closeModal, visible }: ModalProps) {
  return (
    <>
      {visible &&
        createPortal(
          <OuterContainer onClick={closeModal}>
            <InnerContainer onClick={(e) => e.stopPropagation}>
              {children}
            </InnerContainer>
          </OuterContainer>,
          document.body
        )}
    </>
  )
}
