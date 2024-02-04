import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Header = () => {
  return (
  <header>
    <div className='max-w-7xl mx-auto py-2 '>
        <div className='flex justify-between items-center px-3'>
        <div className="loader-container ">
  
  <svg viewBox="0 0 1200 140">
<text x="10%" y="50%" dy=".3em"  className="text-body">
CINDY&apos;S
</text>
<text x="55%" y="50%" dy=".3em"  className="text-body2">
ART
</text>

  </svg>
</div>


<div className='flex gap-5 font-semibold text-gray-600'>
<ul className='flex gap-3'>
    <li>Home</li>
    <li>Gallery</li>
    <li>News & Events</li>
    <li>About</li>
    <li>Contact</li>
    <li>Pricing</li>
  
</ul>
<div className='flex justify-center items-center'>
    <ShoppingCartIcon className='w-5 h-5'/>
</div>
</div>
        </div>
  


    </div>
  </header>
  )
}

export default Header