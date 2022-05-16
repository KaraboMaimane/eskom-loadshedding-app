import React from 'react'

function Header() {
  return (
    <header>
        <nav className='flex justify-between bg-black text-white'>
              <a className='px-2 py-2 hover:cursor-pointer'>Plug Majita</a>
              <ul className='flex'>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 hover:border-white cursor-pointer transition-colors duration-300 ease-in'>Home</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 hover:border-white cursor-pointer transition-colors duration-300 ease-in'>Products</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 hover:border-white cursor-pointer transition-colors duration-300 ease-in'>About Us</li>
                <li className='px-2 pt-2 pb-1 mb-1 border-b-transparent border-b-4 hover:border-white cursor-pointer transition-colors duration-300 ease-in'>Contact Us</li>
              </ul>
        </nav>
    </header>
  )
}

export default Header