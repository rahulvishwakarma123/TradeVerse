import React from 'react'

const Footer = () => {
  return (
    <div className='px-28 pt-10'>
      <div className="flex">
        <div className="basis-1/4 pr-5">
          <h1 className='text-blue-500 font-semibold text-3xl'>Tradeverse</h1>
          <p>&copy; 2025 - 2025, Not Tradeverse Broking Ltd. <br /> All rights reserved.</p>
        </div>
        <div className="basis-1/4 flex flex-col mt-2 ">
          <h2 className='mb-4 text-xl font-semibold'>Company</h2>
            <a className='text-blue-500 underline' href="">About</a>
            <a className='text-blue-500 underline' href="">Pricing</a>
            <a className='text-blue-500 underline' href="">Referal Program</a>
            <a className='text-blue-500 underline' href="">Career</a>
            <a className='text-blue-500 underline' href="">Zerodha.tech</a>
            <a className='text-blue-500 underline' href="">Press & media</a>
            <a className='text-blue-500 underline' href="">Tradeverse care (CSR)</a>
        </div>
        <div className="basis-1/4 flex flex-col mt-2 ">
          <h2 className='mb-4 text-xl font-semibold'>Support</h2>
            <a className='text-blue-500 underline' href="">Contact</a>
            <a className='text-blue-500 underline' href="">Support portal</a>
            <a className='text-blue-500 underline' href="">T-contact blog</a>
            <a className='text-blue-500 underline' href="">List of charges</a>
            <a className='text-blue-500 underline' href="">Download & resourse</a>
        </div>
        <div className="basis-1/4 flex flex-col mt-2 ">
          <h2 className='mb-4 text-xl font-semibold'>Account</h2>
            <a className='text-blue-500 underline' href="">Open an account</a>
            <a className='text-blue-500 underline' href="">Fund transfer</a>
        </div>
      </div>
    </div>
  )
}

export default Footer