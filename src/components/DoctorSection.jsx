import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import DocImage from '../assets/Progetto senza titolo (19) 1.png'
import LocationCompo from '../components/LocationCompo'

const DoctorSection = () => {
    return (
        <section className='bg-[#FBFEF6]'>
            <div className='flex justify-center items-center flex-wrap pt-10'>
                <LocationCompo />
                <div className='flex justify-center items-center flex-wrap'>
                    <div className='px-16 py-16'>
                        <h4 className="text-[#000000] text-[32px] font-normal italic font-poppins mb-4">Your <span className='text-[#95C22B]'>Smile</span>, Our Passion</h4>
                        <h1 className="max-w-[700px] w-full text-[#000000] text-5xl font-extrabold font-poppins leading-[72px] mb-8">Personalized <span className='text-[#95C22B]'>Dental Solutions</span> for Every Patient</h1>
                        <div className=' flex gap-5'>
                            <div className='flex justify-center items-center gap-1 bg-[#95C22B] border-[1px] border-[#95C22B] rounded-lg px-5 py-4'>
                                <button className=' text-[#FFFFFF] text-lg font-semibold font-poppins '>Book an appointment</button>
                                <MdOutlineArrowOutward color='#FFFFFF' fontSize={24} />
                            </div>
                            <div className='flex justify-center items-center gap-1 border-[1px] border-[#95C22B] rounded-lg px-5 py-4'>
                                <button className=' text-[#95C22B] text-lg font-semibold font-poppins'>Know more</button>
                                <MdOutlineArrowOutward color='#95C22B' fontSize={24} />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' relative'>
                            <div className=' absolute top-[39%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                                <span className='text-[#000000] text-2xl font-medium font-poppins'>30+</span>
                                <p className='text-[#000000] text-xs font-normal font-poppins'>Expert<br />
                                    Dentist</p>
                            </div>
                            <img src={DocImage} alt="" />
                            <div className=' absolute bottom-[65%] right-[0%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                                <span className='text-[#000000] text-2xl font-medium font-poppins'>200k+</span>
                                <p className='text-[#000000] text-xs font-normal font-poppins break-all'>Expert
                                    Dentist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorSection
