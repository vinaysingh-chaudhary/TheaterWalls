import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] h-[15vh] bg-black flex flex-col justify-center gap-3 items-center '>

        <div className='w-[100%]'>
              <ul className=' flex justify-evenly items-center'>
                <li className='text-gray-200 hover:text-pink-500 cursor-pointer'>Privacy Policy </li>
                <li className='text-gray-200 hover:text-pink-500 cursor-pointer'>Terms of Use</li>
                <li className='text-gray-200 hover:text-pink-500 cursor-pointer'>Connect</li>
                <li className='text-gray-200 hover:text-pink-500 cursor-pointer'>FAQ</li>
              </ul>
        </div>

      <p className="text-3xl text-center text-white mt-4">
          Theater<span className="text-pink-500">Walls</span>
          <span className='text-sm'>     by Vinay Chaudhary</span>
        </p>
    </div>
  )
}

export default Footer
