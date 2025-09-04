import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className='flex justify-between items-center py-5 px-20 border-b border-b-gray-300'>
      <div>
        <Link to='/' className='text-blue-700 text-4xl font-semibold'>Tradeverse</Link>
      </div>

      <div className='flex gap-10 text-xl'>
        <Link className='text-gray-500 font-semibold hover:scale-110 duration-300 hover:text-gray-700 hover:text-shadow-zinc-900' to='/signup'>Signup</Link>
        <Link className='text-gray-500 font-semibold hover:scale-110 duration-300 hover:text-gray-700 hover:text-shadow-zinc-900' to='/about'>About</Link>
        <Link className='text-gray-500 font-semibold hover:scale-110 duration-300 hover:text-gray-700 hover:text-shadow-zinc-900' to='/product'>Products</Link>
        <Link className='text-gray-500 font-semibold hover:scale-110 duration-300 hover:text-gray-700 hover:text-shadow-zinc-900' to='/pricing'>Pricing</Link>
        <Link className='text-gray-500 font-semibold hover:scale-110 duration-300 hover:text-gray-700 hover:text-shadow-zinc-900' to='/support'>Support</Link>
        <i className="mt-1 fa-solid fa-bars"></i>
      </div>
    </nav>
    
  )
}


export default Navbar