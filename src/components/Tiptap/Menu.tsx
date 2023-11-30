import styled from 'styled-components'
import { BubbleMenu } from '@tiptap/react'
import { useCurrentEditor } from '@tiptap/react'

const Button = styled.button`
  background-color: black;
  border: 0;
  border-radius: 0.25rem;
  color: white;
  font-size: 0.75rem;
  margin: 0 0.25rem 0.25rem 0;
  padding: 0.25rem 0.5rem;
`

export default function Menu() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        maxWidth: 260,
      }}
    >
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleBold().run()
        }}
      >
        B
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleItalic().run()
        }}
      >
        I
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleUnderline().run()
        }}
      >
        U
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleStrike().run()
        }}
      >
        strike
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleHighlight().run()
        }}
      >
        highlight
      </Button>
      {/* <Button
    type="button"
      onClick={() => {
        
        editor.chain().focus().clearNodes().run()
      }}
    >
      clear nodes
    </Button> */}
      {/* <Button
    type="button"
      onClick={() => {
        
        editor.chain().focus().setParagraph().run()
      }}
    >
      paragraph
    </Button> */}
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }}
      >
        h1
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }}
      >
        h2
      </Button>
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleHeading({ level: 3 }).run()
      }}
    >
      h3
    </Button> */}
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleHeading({ level: 4 }).run()
      }}
    >
      h4
    </Button> */}
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleHeading({ level: 5 }).run()
      }}
    >
      h5
    </Button> */}
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleHeading({ level: 6 }).run()
      }}
    >
      h6
    </Button> */}
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleBulletList().run()
        }}
      >
        ul
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run()
        }}
      >
        ol
      </Button>
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleCode().run()
      }}
    >
      code
    </Button> */}
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().toggleCodeBlock().run()
      }}
    >
      code block
    </Button> */}
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run()
        }}
      >
        quote
      </Button>
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().setHorizontalRule().run()
        }}
      >
        line
      </Button>
      {/* <Button
      type='button'
      onClick={() => {
        editor.chain().focus().setHardBreak().run()
      }}
    >
      hard break
    </Button> */}
      {/* <Button
    type="button"
      onClick={() => {
        
        editor.chain().focus().undo().run()
      }}
    >
      undo
    </Button> */}
      {/* <Button
    type="button"
      onClick={() => {
        
        editor.chain().focus().redo().run()
      }}
    >
      redo
    </Button> */}
      <Button
        type='button'
        onClick={() => {
          editor.chain().focus().unsetAllMarks().run()
        }}
      >
        X
      </Button>
    </BubbleMenu>
  )
}
