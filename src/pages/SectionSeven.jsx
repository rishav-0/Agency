import React, { useState } from 'react'
import Dropdown from '../Components/Dropdown'
import { leftFAQs, rightFAQs } from '../utils'

const SectionSeven = () => {
  const [toggle,setToggle] = useState(false)

  return (
   <div id='' className="h-screen py-10 flex items-center">
        <div className='  container mx-auto lg:px-20'>
            <p className="text-sm mb-4 text-center">FAQ</p>
            <p className="text-3xl mb-10 capitalize font-bold  nato text-center">Frequently asked questions  <br />about delta </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              
              <div className="flex flex-col gap-4">
                {
                  leftFAQs.map((i,index)=><Dropdown quesion={i.question} answer={i.answer} isOpen={index === toggle} onClick={()=>setToggle(index === toggle?null:index)}/>)
                }
              </div>
              <div className="flex flex-col gap-4">
                {
                  rightFAQs.map((i,index)=><Dropdown quesion={i.question} answer={i.answer} isOpen={index === toggle} onClick={()=>setToggle(index === toggle?null:index)}/>)
                }
              </div>
            </div>
        

        </div>
    </div>
  )
}

export default SectionSeven