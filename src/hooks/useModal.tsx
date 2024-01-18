import { useRef, useState } from 'react'

export default function useModal() {
  const [visible, setVisible] = useState(false)
  const lastElement = useRef<HTMLElement | null>(
    document ? document.body : null
  )

  const openModal = () => {
    lastElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : document.body
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
    if (lastElement.current) lastElement.current.focus()
  }

  return { visible, openModal, closeModal }
}
