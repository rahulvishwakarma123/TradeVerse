import React from 'react'

const Team = () => {
  return (
    <div className='mb-20'>
        <h1 className='text-5xl font-semibold text-center pb-20 '>People</h1>
        <div className="flex">
            <div className="basis-1/2 flex flex-col items-center">
                <img className='h-[50vh] rounded-full ' src="\media\profile.jpg" alt="Profile picture" />
                <h2 className='text-2xl font-bold text-gray-600 mt-5 font-mono'>Rahul Vishwakarma</h2>
                <p className='font-mono text-gray-500 text-xl mt-3'>Founder, CEO</p>
            </div>
            <div className="basis-1/2 px-20">
                <p className='text-gray-700 text-[1.2rem] leading-8 mb-10'>Rahul tailwinded and founded Tradeverse in 2025 to overcome the hurdles he faced during his decade long stint as trader. Today, Tradeverse changed nothing. It is only the proof of Rahul's development skills.</p>
                <p className='text-gray-700 text-[1.2rem] leading-8 mb-10'>He is student of Delhi institute of Engineering and Technology Meerut and recently completed his diploma from MMIT Maharajganj.</p>
                <p className='text-gray-700 text-[1.2rem] leading-8 mb-10'> Connect on <a href='' className='text-blue-700'>Homepage / TradingQ&A/ Twitter</a></p>
            </div>
        </div>
    </div>
  )
}

export default Team