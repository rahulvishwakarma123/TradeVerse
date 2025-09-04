import React from 'react'

const Education = () => {
  return (
    <div className='mt-28 flex'>
      <div className='basis-1/2'>
        <img src="\media\education.svg" alt="" />
      </div>
      <div className='basis-1/2'>
        <h1 className='font-semibold text-3xl/loose mb-6'>Free and open market education</h1>
        <p className='mb-4 text-gray-700'>Varsity, the largest online stock market education book in the world covering everithing form the basics to advanced trading.</p>
        <a className='text-blue-700' href="">varsity <i className="fa-solid fa-arrow-right"></i></a>
       <p className='mt-10 mb-4 text-gray-700'>TradingQ&A, the most active trading and investment community in india for all your market related queries.</p>
        <a className='text-blue-700' href="">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>

      </div>
    </div>
  )
}

export default Education