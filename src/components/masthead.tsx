import React, { } from "react";
import Image from 'next/image';

const Masthead: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='p-12 font-bold'>
        <h1>Margelo</h1>
        <h2>
          <span>App Development, </span>{' '}<span>done right.</span>
        </h2>
      </div>
      Masthead
    </div>
  )
}

export default Masthead;