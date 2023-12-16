import Image from 'next/image'
import { Inter } from 'next/font/google'
import Masthead from '@/components/masthead'
import AboutUs from '@/components/aboutus'
import Head from 'next/head'
import Skills from '@/components/skill'
import Works from '@/components/works'
import TrustedBy from '@/components/trustedby'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className="">
      <Head>
        <title>Natsusaka</title>
        <meta name="description" content="Next.js pratice" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className='font-bold text-9xl'></div>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
    </div>
  )
}
