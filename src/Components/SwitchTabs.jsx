import React from 'react'

const SwitchTabs = ({data, onTabFunction}) => {


  return (
    <div className='w-[100%] h-[100%] flex justify-around items-center'>
        {data.map((tab, index) => {
            return <button className='focus:border-2 focus:border-black' key={index} onClick={() => onTabFunction(tab, index)}>
                {tab}
                </button>
        })}
    </div>
  )
}

export default SwitchTabs
