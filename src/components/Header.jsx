import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className=' flex justify-between items-center px-10 py-5'>
        <div className="left text-[#95C22B] text-4xl font-bold">
          LOGO
        </div>
        <div className="left">
          <ul className=' flex gap-10'>
            <li><Link to="/contact" className=' text-[#000000] hover:text-[#95C22B] text-base font-bold font-poppins'>Home</Link></li>
            <li><Link to="/dental" className=' text-[#000000] hover:text-[#95C22B] text-base font-bold font-poppins'>Dental Camps</Link></li>
            <li><Link to="/dentist" className=' text-[#000000] hover:text-[#95C22B] text-base font-bold font-poppins'>Our Dentist </Link></li>
            <li><Link to="/press-blog" className=' text-[#000000] hover:text-[#95C22B] text-base font-bold font-poppins'>Blogs</Link></li>
            <li><Link to="/about" className=' text-[#000000] hover:text-[#95C22B] text-base font-bold font-poppins'>About Us</Link></li>
          </ul>
        </div>
        <div className="left flex gap-4">
          <button><Link to="/login" className='bg-[#95C22B] text-[#FFFFFF] text-xl font-semibold font-poppins rounded-lg px-6 py-2'>Log in</Link></button>
        </div>
      </nav>
    </header>
  )
}

export default Header
