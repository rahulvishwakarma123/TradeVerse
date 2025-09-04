import React from 'react'

const Hero = () => {
  return (
      <div className='flex flex-col items-center'>
        <img src="\media\homeHero.png" alt="Hero section image" className='mb-18'/>
        <h1 className='text-5xl font-semibold mb-8'>Invest in everything</h1>
        <p className='text-gray-700 mb-5'>Online platform for invest in stocks, derivative, mutual funds, and more...</p>
        <button className='mt-3 bg-blue-700 px-20 py-3 rounded-md text-white text-[1.2rem] hover:bg-blue-800 duration-300'>Signup Now</button>
      </div>
  )
}

export default Hero