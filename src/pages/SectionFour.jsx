import { Badge, Switch } from '@material-tailwind/react'
import React from 'react'
import Card from '../Components/Card'
import PlanSelection from '../Components/PlanSelection'

const SectionFour = () => {
  return (
    <div id='Pricing' className="h-screen bg-[#fffcf1] py-10 flex items-center">
        <div className='  container mx-auto lg:px-20'>
            <p className="text-sm mb-4 text-center">Pricing</p>
            <p className="text-3xl capitalize font-bold mb-4 nato text-center">Choos the right plan for <br /> Your BUsiness </p>
      
            <PlanSelection />

        </div>
    </div>
)
}

export default SectionFour