import styled from 'styled-components'
import { BubbleMenu, Editor } from '@tiptap/react'
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiMarkPenLine,
  RiLink,
  RiLinkUnlink,
  RiH1,
  RiH2,
  RiListUnordered,
  RiListOrdered,
  RiDoubleQuotesL,
  RiFormatClear,
} from 'react-icons/ri'

const MenuWrapper = styled(BubbleMenu)`
  background-color: #222;
  border-radius: 0.45rem;
  display: flex;
  flex-flow: row wrap;
  padding: 0.125rem;
`
const _Button = ({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <button type='button' onClick={onClick} {...props}>
      {children}
    </button>
  )
}

const Button = styled(_Button)`
  align-items: center;
  background-color: #222;
  border: 0;
  border-radius: 0.25rem;
  color: white;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  margin: 0.125rem;
  padding: 0.25rem 0.375rem;

  &:hover {
    background-color: #444;
    cursor: pointer;
  }
`

export default function Menu({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  const isSelectionLink = editor.getAttributes('link').href

  const linkHandler = () => {
    if (isSelectionLink) {
      return editor.chain().focus().extendMarkRange('link').unsetLink().run()
    }

    const suppliedHref = window.prompt('URL')
    if (!suppliedHref) return

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: suppliedHref })
      .run()
  }

  return (
    <MenuWrapper
      editor={editor}
      tippyOptions={{
        maxWidth: '11.5rem',
      }}
    >
      <Button
        onClick={() => {
          editor.chain().focus().toggleBold().run()
        }}
      >
        <RiBold />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleItalic().run()
        }}
      >
        <RiItalic />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleUnderline().run()
        }}
      >
        <RiUnderline />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleStrike().run()
        }}
      >
        <RiStrikethrough />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleHighlight().run()
        }}
      >
        <RiMarkPenLine />
      </Button>
      <Button onClick={linkHandler}>
        {isSelectionLink ? <RiLinkUnlink /> : <RiLink />}
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }}
      >
        <RiH1 />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }}
      >
        <RiH2 />
      </Button>

      <Button
        onClick={() => {
          editor.chain().focus().toggleBulletList().run()
        }}
      >
        <RiListUnordered />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run()
        }}
      >
        <RiListOrdered />
      </Button>

      <Button
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run()
        }}
      >
        <RiDoubleQuotesL />
      </Button>
      <Button
        onClick={() => {
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }}
      >
        <RiFormatClear />
      </Button>
    </MenuWrapper>
  )
}
