'use client'

import styled from 'styled-components'
import { hsla } from '@/utils/hsla'

const PostWrapper = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => hsla(theme.s500, 0.3)},
    0 4px 6px -4px ${({ theme }) => hsla(theme.s500, 0.3)};
  margin: auto;
  margin-bottom: 1.5rem;
  padding: 1.5rem 1.5rem;
  text-align: left;
  width: 60ch;
`

export default PostWrapper
