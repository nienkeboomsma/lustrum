'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getPaddedDayMonthYearString } from '@/utils/dateStrings'

export default function KeyboardNavigation() {
  const path = usePathname()
  const router = useRouter()

  const getNewPath = (path: string, key: 'ArrowLeft' | 'ArrowRight') => {
    const increments = { ArrowLeft: -1, ArrowRight: 1 }

    const [, view, date] = path.split('/')
    const [dayString, monthString, yearString] = date.split('-')
    const [day, month, year] = [
      Number(dayString),
      Number(monthString),
      Number(yearString),
    ]

    const currentDate = Date.UTC(year, month - 1, day)
    const newDate = new Date(currentDate)

    if (view === 'day')
      newDate.setUTCDate(newDate.getUTCDate() + increments[key])
    if (view === 'month')
      newDate.setUTCMonth(newDate.getUTCMonth() + increments[key])

    const newPath = `/${view}/${getPaddedDayMonthYearString(newDate)}`

    return newPath
  }

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.target instanceof HTMLElement && event.target.isContentEditable)
      return
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    if (document.querySelector('[data-modal]')) return

    const newPath = getNewPath(path, event.key)
    router.push(newPath)
  }

  useEffect(() => {
    if (!window) return

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  return <></>
}
