import Image from 'next/image'
import { Inter } from 'next/font/google'
import Masthead from '../components/masthead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className="">
      <div className='font-bold text-9xl'></div>
      <Masthead></Masthead>
    </div>
  )
}
