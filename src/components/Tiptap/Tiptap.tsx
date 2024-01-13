'use client'

import styled, { css } from 'styled-components'
import { useEffect } from 'react'
import { EditorEvents, useEditor, EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Menu from './Menu'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'

type NonEditableProps = {
  editable: false
  defaultContent: object | string
}

type EditableProps = {
  editable: true
  defaultContent: object | string
  onUpdate: (props: EditorEvents['update']) => void
  placeholder: string
}

type TiptapProps = NonEditableProps | EditableProps

const Wrapper = styled.div<{ $editable: boolean }>`
  [contenteditable]:focus {
    outline: ${({ theme }) => theme.s500} solid 2px;
    /* seemingly the only way to fix the inconsistent
        outline-offset between Tiptap and inputs on Safari */
    outline-offset: -1px;
  }

  & .tiptap {
    width: 100%;

    ${({ theme, $editable }) =>
      $editable &&
      css`
        background-color: white;
        border: 1px solid ${theme.s500};
        border-radius: 4.5px;
        padding: 0.125rem 0.375rem;
      `}

    & p.is-editor-empty:first-child::before {
      color: #aaa;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }
  }

  & p {
    color: ${({ theme }) => theme.s950};
    margin-bottom: 1.125rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
  & u {
    text-decoration-color: ${({ theme }) => theme.s500};
  }

  & a {
    color: ${({ theme }) => theme.s600};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.s400};
    }
  }

  & mark {
    background-color: ${({ theme }) => theme.s200};
  }

  & h1 {
    color: ${({ theme }) => theme.s500};
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    line-height: 1.75rem;
    margin: 0.25rem 0 1.5rem 0;
    text-align: center;
    text-transform: uppercase;
  }

  & h2 {
    color: ${({ theme }) => theme.s500};
    font-size: 1rem;
    letter-spacing: 0.025em;
    line-height: 1.625rem;
    text-transform: uppercase;
  }

  & ul,
  & ol {
    margin: 0 0 1.125rem 1rem;
    padding-left: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & li {
    padding-left: 0.375rem;
  }

  & blockquote {
    background-color: ${({ theme }) => theme.s100};
    border-left: 0.25rem solid ${({ theme }) => theme.s300};
    margin: 1.25rem 2rem;
    padding: 0.25rem;
    padding-left: 0.5rem;
    position: relative;
  }
`

export default function Tiptap(props: TiptapProps) {
  const { defaultContent, editable } = props
  const placeholder = editable ? props.placeholder : undefined
  const onUpdate = editable ? props.onUpdate : undefined

  const extensions = [
    Highlight,
    Link,
    Placeholder.configure({
      placeholder,
      showOnlyWhenEditable: true,
    }),
    StarterKit,
    Typography,
    Underline,
  ]

  const editor = useEditor({
    editable,
    extensions,
    content: defaultContent,
    onUpdate,
  })

  useEffect(() => {
    editor?.commands.setContent(defaultContent)
  }, [defaultContent, editor])

  return (
    <Wrapper $editable={editable}>
      <EditorContent editor={editor} />
      <Menu editor={editor} />
    </Wrapper>
  )
}
