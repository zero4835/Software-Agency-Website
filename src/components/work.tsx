import react from 'react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

export const WorkContainer: React.FC<Props> = ({ children }) => (
  <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>{children}</div>
)

export const 