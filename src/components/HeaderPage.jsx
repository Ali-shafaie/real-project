import React from 'react'

export default function HeaderPage() {
  return (
    <div className=' max-w-7xl mx-auto items-center py-4 px-2 sticky top-0'>

    <div className=' flex  justify-between '>
        <div>Real website</div>
        <div className='text-gray-300' >
            <ul  className='flex space-x-2 md:space-x-6 lg:space-x-10 cursor-pointer'>
                <li>Home</li>
                <li>Offers</li>
                <li>Sign In</li>
            </ul>
        </div>
    </div>
    </div>
  )
}
