import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='mx-10 bg-[#F8F8F8] py-16'>
      <div className=' flex justify-between items-center border-b-2 border-[#DCDCDC] pb-6'>
        <div className="left text-[#95C22B] text-4xl font-normal">
          LOGO
        </div>
        <div className="left">
          <ul className=' flex gap-10'>
            <li><Link to="/about" className=' text-[#000000] text-xl font-medium font-poppins'>About Us</Link></li>
            <li><Link to="/dentist" className=' text-[#000000] text-xl font-medium font-poppins'>Our Dentist </Link></li>
            <li><Link to="/dental" className=' text-[#000000] text-xl font-medium font-poppins'>Dental Camps</Link></li>
            <li><Link to="/press-blog" className=' text-[#000000] text-xl font-medium font-poppins'>Press & Blog</Link></li>
            <li><Link to="/contact" className=' text-[#000000] text-xl font-medium font-poppins'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="left flex gap-4">
          <FiFacebook className='w-[24px] h-[24px] text-[#95C22B]' />
          <FaInstagram className='w-[24px] h-[24px] text-[#95C22B]' />
          <IoLogoLinkedin className='w-[24px] h-[24px] text-[#95C22B]' />
          <AiOutlineYoutube className='w-[24px] h-[24px] text-[#95C22B]' />
        </div>
      </div>
      <div className='flex items-center justify-between pt-6'>
        <p className=' text-[#000000] text-base text-left font-normal font-poppins'>De9to 2023</p>
        <p className=' text-[#000000] text-base text-right font-normal font-poppins'>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
