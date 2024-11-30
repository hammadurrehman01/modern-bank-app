import React, { useState } from 'react';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index.js"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='navbar w-full flex items-center justify-between py-6'>
      <img src={logo} alt="hookbank" className='w-[124px] h-[32px]' />
      <ul className='hidden sm:flex justify-end items-center flex-1'>
        {
          navLinks.map((item, index) => (
            <li key={item.id} className={`font-normal font-poppins cursor-pointer text-base text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))
        }
      </ul>
      <div className='flex flex-1 justify-end items-center sm:hidden'>
        <img className='w-[28px] h-[28px] object-contain cursor-pointer'
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((item, index) => (
                <li key={item.id} className={`font-normal font-poppins cursor-pointer text-base text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`} >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
