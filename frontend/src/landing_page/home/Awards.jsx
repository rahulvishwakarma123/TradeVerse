import React from 'react'
const Awards = () => {
  return (
    <div className='flex flex-row mt-28'>
      <div className="basis-1/2">
        <img src="\media\largestBroker.svg" alt="largest broker svg" />
      </div>
      <div className="basis-1/2">
        <h1 className='font-semibold text-3xl/loose'>Largest stock broker in India</h1>
        <p className='mt-3 text-xl font-semibold text-gray-700'>10 Tradeverse clients contribute over .001% all over retail order volumes in india daily by trade  and investing in</p>
        <div className="flex pl-4 mt-10 gap-10">
          <div className="basis-1/2">
            <ul className='list-disc'>
              <li className='mt-2'>Futures and Options</li>
              <li className='mt-2'>Commodity derivatives</li>
              <li className='mt-2'>Currency derivatives</li>
            </ul>
          </div>
          <div className="basis-1/2">
            <ul className='list-disc'>
              <li className='mt-2'>Stock & IPOs</li>
              <li className='mt-2'>Direct mutual funds</li>
              <li className='mt-2'>Bonds & Govt. securities</li>
            </ul>
          </div>
        </div>
        <img className='mt-10 w-[90%] h-8' src="\media\pressLogos.png" alt="press logos" />
      </div>
    </div>
  )
}

export default Awards