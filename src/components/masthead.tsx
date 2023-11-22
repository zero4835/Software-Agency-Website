import React, { } from "react";
import Image from 'next/image';

const Masthead: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
        <source src="/assets/background.mv4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/background.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col'>
        <h1 className='mb-6 text-4xl xl:text-5xl'>Natsusaka</h1>
        <h2 className='mb-2 text-2xl xl:text-3xl track-tight'>
          <span>App Development, </span><span>done right.</span>
        </h2>
      </div>
    </div>
  )
}

export default Masthead;