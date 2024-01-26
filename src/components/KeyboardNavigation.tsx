'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getAdjoiningDatePath } from '@/utils/getAdjoiningDatePath'

export default function KeyboardNavigation() {
  const path = usePathname()
  const router = useRouter()

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.target instanceof HTMLElement && event.target.isContentEditable)
      return
    if (document.querySelector('[data-modal]')) return

    if (event.key === 'ArrowLeft') router.push(getAdjoiningDatePath(-1, path))
    if (event.key === 'ArrowRight') router.push(getAdjoiningDatePath(1, path))
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  return <></>
}
