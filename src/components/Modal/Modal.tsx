import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PostWrapper from '../Posts/PostWrapper'
import { hsla } from '@/utils/hsla'
import { useEffect, useRef } from 'react'

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

  &:focus {
    // the modal div is only ever focussed in order to start tabbing there; as it
    // has no functional reason for being focussed, it is ok not to display a
    // focus-outline for once
    outline: 0;
  }
`

export default function Modal({ children, closeModal, visible }: ModalProps) {
  const modalRef: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (!window || !visible || !modalRef.current) return

    const modalElement = modalRef.current

    // we want tabbing to start at the modal without having to autofocus anything
    // when the modal is opened
    modalElement.focus()

    const keyDownHandler = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        event.target instanceof HTMLElement &&
        !event.target.className.includes('react-datepicker')
      ) {
        return closeModal()
      }

      if (event.key !== 'Tab') return

      // if this is run only once at the start of the useEffect callback, it will
      // not include any editable Tiptap components, because those will not have
      // rendered yet
      const focusableElements = modalElement.querySelectorAll(
        'a[href], button:not([disabled]), [contenteditable], input, select, textarea'
      )

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (
        event.shiftKey &&
        event.target === firstElement &&
        lastElement instanceof HTMLElement
      ) {
        event.preventDefault()
        lastElement.focus()
      }

      if (
        !event.shiftKey &&
        event.target === lastElement &&
        firstElement instanceof HTMLElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [visible])

  return (
    <>
      {visible &&
        createPortal(
          <OuterContainer data-modal onClick={closeModal}>
            <InnerContainer
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              tabIndex={0}
            >
              {children}
            </InnerContainer>
          </OuterContainer>,
          document.body
        )}
    </>
  )
}
