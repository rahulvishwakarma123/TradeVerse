import React from 'react'

const NotFound = () => {
  return (
    <div className="px-30 w-screen h-[50vh] flex items-center justify-center text-center">
        <div>
            <h1 className='text-5xl font-semibold mb-6'>404 Not Found</h1>
            <p className='text-xl text-gray-800'>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  )
}

export default NotFound