import React, { useState } from 'react'

const Dropdown = ({quesion, answer,isOpen,onClick}) => {

    const [toggle, setToggle] = useState(false)

  return (
    <div className='' onClick={onClick}>
        <div className="flex gap-4 items-center cursor-pointer">
            <div className="h-5 p2 min-w-5 w-5 rounded-full flex items-center justify-center bg-black">
                <i className={`fas fa-${isOpen?'minus':'plus'} text-white`}></i>
            </div>
                <p className="font-semibold">{quesion}</p>  
        </div>
        <p className={`ml-9 text-sm ${isOpen?'block':'hidden'}`}>{answer}</p>
    </div>
  )
}

export default Dropdown