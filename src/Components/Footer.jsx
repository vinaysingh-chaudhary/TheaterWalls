import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[15vh] bg-black flex flex-col justify-center gap-3 items-center -mt-[2%]'>
      <p className="text-3xl text-center text-white mt-4 bg-black">
          Theater<span className="text-pink-500">Walls</span>
          <span className='text-sm cursor-pointer'>  <a href="https://twitter.com/Viisactive" target='_blank'>by Vinay Chaudhary</a></span>
        </p>
    </div>
  )
}

export default Footer
