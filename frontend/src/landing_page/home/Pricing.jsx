import React from 'react'

const Pricing = () => {
  return (
    <div className='flex mt-28 justify-between'>
      <div className="basis-4/12">
        <h1 className='font-semibold text-3xl/loose mb-6'>Unbeatable pricing</h1>
        <p className='mb-4'>We pioneered the concept on discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a className='text-blue-700' href="">See pricing <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="basis-6/12 flex">
        <div className="text-center basis-1/2 border-2 flex flex-col p-10 items-center justify-center border-gray-400">
          <h2 className='font-semibold text-5xl mb-6'>&#8377;0</h2>
          <p>Free equity delivery and direct mutual fund</p>
        </div>
        <div className="text-center basis-1/2 border-2 flex flex-col p-10 items-center justify-center border-gray-400">
          <h2 className='font-semibold text-5xl mb-6'>&#8377;20</h2>
          <p>Intraday and F&O</p>
        </div>
        
      </div>
    </div>
  )
}

export default Pricing