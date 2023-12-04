'use client'

import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.s500};
  border-radius: 1.5rem;
  box-shadow: 0 16px 20px -4px ${({ theme }) => theme.s200},
    0 6px 8px -5px ${({ theme }) => theme.s200};
  color: ${({ theme }) => theme.s50};
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.0625rem;
  margin: 1.5rem auto;
  max-width: fit-content;
  padding: 0.375rem 0.875rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.s400};
  }

  &:active {
    transform: translateY(1px);
    transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    box-shadow: 0 10px 15px -3px ${({ theme }) => theme.s200},
      0 4px 6px -4px ${({ theme }) => theme.s200};
  }
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
    <Link href={href}>
      <Wrapper>{displayDate}</Wrapper>
    </Link>
  )
}
