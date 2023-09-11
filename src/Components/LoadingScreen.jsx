import React from 'react'
import { MdMovie } from "react-icons/md";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center gap-3 pb-8 bg-black">
    <div className="w-full min-h-full flex justify-center items-center text-white text-4xl">
    Theatre<span className="text-pink-500">Walls</span>
    </div>
    <div className="w-full min-h-full flex justify-center items-center text-white text-4xl">
      <MdMovie />
    </div>
  </div>
  )
}

export default LoadingScreen
