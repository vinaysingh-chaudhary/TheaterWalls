import React from 'react'

const SwitchTabs = ({data, onTabFunction}) => {
  return (
    <div className='w-[100%] h-[100%] flex justify-around items-center'>
        {data.map((element, index) => {
            return <button className='focus:border-2 focus:border-black' onClick={onTabFunction(index)}>{element}</button>
        })}
    </div>
  )
}

export default SwitchTabs
