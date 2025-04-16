import { Button, Input } from '@material-tailwind/react'
import React from 'react'


const SectionEight = () => {
  return (
    <div id='Contact' className='p-10 grid grid-cols-2 gap-4'>
        <img className='' src="https://www.patsocial.com/wp-content/uploads/2023/05/visibilitypack0-1-1.webp" alt="" />
        <div className="">
             <p className="text-sm mb-4">Contact us</p>
            <p className="text-3xl capitalize font-bold mb-8 nato">got a project <br />or a partnership  <br />in mind ? </p>
            <div className="flex gap-4 mb-8">
                <div className="">
                    <div className="w-8 h-8 mb-4 rounded-lg flex items-center justify-center bg-black">
                        <i className="fas fa-phone text-white"></i>
                    </div>
                    <p className="text-sm font-semibold">Phone:</p>
                    <p className="text-sm text-gray-400">+91 9365046638</p>
                    <p className="text-sm text-gray-400">+91 9365046638</p>
                </div>
                <div className="">
                    <div className="w-8 mb-4 h-8 rounded-lg flex items-center justify-center bg-black">
                        <i className="fas fa-envelope text-white"></i>
                    </div>
                    <p className="text-sm font-semibold">Email:</p>
                    <p className="text-sm text-gray-400">info@gmail.com</p>
                    <p className="text-sm text-gray-400">info@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
           <Input variant="standard" label="Enter you Name" placeholder=""/>
           <Input variant="standard" label="Enter Phone number" placeholder=""/>
           <Input variant="standard" label="Enter Email" placeholder=""/>
           <Input variant="standard" label="Tell about your project" placeholder=""/>
            </div>
           <Button className='float-right my-4'>Send a message</Button>
        </div>
    </div>
  )
}

export default SectionEight