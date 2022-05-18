import React from 'react'

function Header() {
  return (
    <header>
        <nav className='flex justify-between bg-neutral-900 text-white'>
              <a className='px-2 py-2 hover:cursor-pointer hover:text-amber-300'>Plug Majita</a>
              <ul className='flex'>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 text-white hover:border-amber-500 hover:text-amber-300 cursor-pointer transition-colors duration-300 ease-in'>Home</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 text-white hover:border-amber-500 hover:text-amber-300 cursor-pointer transition-colors duration-300 ease-in'>Products</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 text-white hover:border-amber-500 hover:text-amber-300 cursor-pointer transition-colors duration-300 ease-in'>About Us</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 text-white hover:border-amber-500 hover:text-amber-300 cursor-pointer transition-colors duration-300 ease-in'>Contact Us</li>
              </ul>
        </nav>
    </header>
  )
}

export default Header