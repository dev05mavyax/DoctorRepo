import React from 'react'
import TeethImg from '../assets/teeth.png'

const BookAppointment = () => {
    return (
        <section className=' bg-[#95C22B] flex justify-center items-center rounded-3xl'>
            <div className=' flex items-start px-5 pt-16 max-md:pb-16'>
                <div className=' max-md:hidden'>
                    <img src={TeethImg} alt="" className='bg-transparent opacity-[0.1]'/>
                </div>
                <div className='max-w-[550px] flex flex-col items-center'>
                    <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins leading-[48px] mb-8">Don’t wait <span className='text-[#FFFFFF]'>and make an appointment today</span></h2>
                    <button className='bg-[#FFFFFF] text-[#95C22B] text-xl font-semibold font-poppins rounded-2xl px-5 py-3'>Book Appointment</button>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment
