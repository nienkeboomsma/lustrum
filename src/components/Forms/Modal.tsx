type ModalProps = {
  children: React.ReactNode
  visible: boolean
}

export default function Modal({ children, visible }: ModalProps) {
  return <>{visible ? children : 'Not visible'}</>
}
