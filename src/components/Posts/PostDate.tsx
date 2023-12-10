'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Button from '../Forms/Button'

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

  const getDisplayDate = () => {
    const [day, month, year] = date.split('-')
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day))
    const localeDate = dateObj.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return view === 'day' ? localeDate.slice(2) : localeDate.slice(0, -5)
  }

  const displayDate = getDisplayDate()

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
