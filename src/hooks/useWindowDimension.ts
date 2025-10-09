'use client'

import { useEffect, useState } from 'react'

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
}

export const useWindowDimension = (): WindowDimensions => {
  const [windowDimension, setWindowDimension] = useState<WindowDimensions>({
    height: undefined,
    width: undefined,
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowDimension({
        width: window.innerHeight,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimension
}
