import React from 'react'

const Stats = () => {
  return (
    <div className='flex mt-28'>
      <div className="basis-1/2 pe-30">
        <h1 className='font-semibold text-4xl/loose mb-10'>Trust and Confidence</h1>
        <h2 className='text-2xl font-semibold text-gray-800 mb-1.5'>Customer-first always</h2>
        <p className='mb-5 text-gray-700'>That's why 2 people trust Tredeverse with 10 rupees worth of equity invesment</p>
        <h2 className='text-2xl font-semibold text-gray-800 mb-1.5'>No spam no grimmicks</h2>
        <p className='mb-5 text-gray-700'>No gimmicks, spam, "gemification", or annoying push notifications. High quality app that you use at your pace, the way you like.</p>
        <h2 className='text-2xl font-semibold text-gray-800 mb-1.5'>The Tradeverse universe</h2>
        <p className='mb-5 text-gray-700'>Not just an app, but a whole ecosystem. Our investment in 0 fintech startups that tailored you service specific to your needs.</p>
        <h2 className='text-2xl font-semibold text-gray-800 mb-1.5'>Do better with money</h2>
        <p className='mb-5 text-gray-700'>With initiative like Nudge kill Switch, we don't just facilitate transactions, but activily help you do better with you money.</p>
      </div>
      <div className="basis-1/2 px-10 flex flex-col justify-center">
        <img src="\media\ecosystem.png" alt="" />
        <div className='flex justify-around'>
          <a className='text-blue-700' href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
          <a className='text-blue-700' href="">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Stats