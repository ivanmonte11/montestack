'use client'

import { useEffect } from 'react'

// @ts-ignore
import 'focus-visible'

export default function FocusVisibleLoader() {
  useEffect(() => {
    // @ts-ignore
    import('focus-visible')
  }, [])

  return null
}
