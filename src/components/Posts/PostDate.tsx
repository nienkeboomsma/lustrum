'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Button from '../Forms/Button'
import { getLocaleDate } from '@/utils/getLocaleDate'

const Wrapper = styled.div`
  margin: 1.5rem auto;
  max-width: fit-content;
`

export default function PostDate({
  view,
  date,
}: {
  view: 'day' | 'month'
  date: string
}) {
  const href = `/${view === 'day' ? 'month' : 'day'}/${date}`
  const displayDate =
    view === 'day'
      ? `${getLocaleDate(date, 'year')}`
      : `${getLocaleDate(date, 'day')} ${getLocaleDate(date, 'month')}`

  return (
    <Wrapper>
      <Link href={href} tabIndex={-1}>
        <Button
          intent={Button.Intent.Primary}
          shadow={true}
          shape={Button.Shape.Lozenge}
          size={Button.Size.Large}
        >
          {displayDate}
        </Button>
      </Link>
    </Wrapper>
  )
}
