import React, { useCallback, useEffect, useState } from 'react'

interface Prop {
  children: React.ReactNode
}

interface ScrollValue {
  innerWidth: number
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0
})

export const SizeObserver: React.FC<Prop> = ({ children }) => {
  const [innerWidth, seetInnerWidth] = useState(0)
  const handleResize = useCallback(() => {
    seetInnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return window.removeEventListener('resize', handleResize)

  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver