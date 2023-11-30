'use client'

import styled from 'styled-components'
import { EditorProvider } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'
import Menu from './Menu'

const Wrapper = styled.div`
  & p {
    /* color: ${({ theme }) => theme.s950} */
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

    &:hover {
      color: ${({ theme }) => theme.s400};
    }
  }

  & mark {
    background-color: ${({ theme }) => theme.s200};
    padding: 0 0.125rem;
    margin: 0 -0.125rem;
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

  & hr {
    border: 1px solid ${({ theme }) => theme.s300};
  }
`
const extensions = [Highlight, Link, StarterKit, Typography, Underline]

export default function Tiptap({
  content,
  editable,
}: {
  content: object
  editable: boolean
}) {
  return (
    <Wrapper>
      <EditorProvider
        extensions={extensions}
        content={content}
        editable={editable}
      >
        <Menu />
      </EditorProvider>
    </Wrapper>
  )
}
