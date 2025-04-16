import React from 'react'
import TestimonialCard from '../Components/TestimonialCard'
import { testimonials } from '../utils'

const SectionFive = () => {
  return (
 <div id='Testimonials' className="h-screen py-10 flex items-center">
        <div className='  container mx-auto lg:px-20'>
            <p className="text-sm mb-4 text-center">Testimonials</p>
            <p className="text-3xl capitalize font-bold mb-4 nato text-center">Whats's Our client say  <br /> about us </p>
      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>

        </div>
    </div>
  )
}

export default SectionFive