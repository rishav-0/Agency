import React from 'react'
import BlogCards from '../Components/BlogCards'

const SectionSix = () => {
  return (
    <div id='Blog' className="h-screen bg-[#fffcf1] py-10 flex items-center">
        <div className='  container mx-auto lg:px-20'>
            <p className="text-sm mb-4 text-center">Blog</p>
            <p className="text-3xl capitalize font-bold mb-4 nato text-center">leates blog posts</p>
            <BlogCards />
        </div>
    </div>
  )
}

export default SectionSix