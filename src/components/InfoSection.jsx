import React from 'react'
import Image from '../assets/Picture1-removebg-preview 1.png'
import CheckMarkImg from '../assets/Vector.png'

const InfoSection = () => {
  return (
    <section className='bg-[#FFFFFF]'>
        <div className='bg-[#FFFFFF] flex justify-center items-center gap-20 flex-wrap px-5 py-16'>
          <div className='w-[550px] max-md:w-[400px] max-[450px]:w-[300px] rounded-[40px]'>
            <div className=' relative'>
              <img src={Image} alt="" className='w-[550px] bg-[#F8F8F8] rounded-[40px]' />
              <img src={CheckMarkImg} alt="" className=' absolute bottom-[9%] right-[8%] z-20 w-[90px] h-[80px] rounded-[40px]' />
              <div className=' absolute z-10 bottom-[-4%] right-[-4%] border-[20px] border-[#FFFFFF] max-w-[225px] max-h-[225px] w-full h-full max-md:w-[175px] max-md:h-[175px] max-[450px]:w-[130px] max-[450px]:h-[130px] bg-[#95C22B] rounded-[40px]'>
              </div>
            </div>
          </div>
          <div className='max-w-[590px] flex flex-col gap-10'>
            <h2 className='text-[#000000] text-[32px] font-medium font-poppins tracking-[8%]'>What We Have Achieved</h2>
            <p className='max-w-[590px] text-[#000000] text-xl font-normal font-poppins tracking-[2%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip ex ea  commodo consequat.</p>
            <div className=' flex flex-wrap'>
              <div className='w-[250px] mb-10'>
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px] mb-10'>
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px] mb-10'>
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px] mb-10'>
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default InfoSection
