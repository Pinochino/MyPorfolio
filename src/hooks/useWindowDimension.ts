'use client'

import { useEffect, useState } from 'react'

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
  scrollY: number | undefined
}

export const useWindowDimension = (): WindowDimensions => {
  const [windowDimension, setWindowDimension] = useState<WindowDimensions>({
    height: undefined,
    width: undefined,
    scrollY: undefined
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowDimension((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }))
    }

    function handleScroll(): void {
      setWindowDimension((prev) => ({
        ...prev,
        scrollY: window.scrollY
      }))
    }

    handleResize()
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll )
    }
  }, [])

  return windowDimension
}
