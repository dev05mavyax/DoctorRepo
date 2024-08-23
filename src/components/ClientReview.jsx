import React from 'react'
import ProfileImg from '../assets/Profile picture.png'
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const ClientReview = () => {
    return (
        <section>
            <div className=' relative flex flex-col justify-center items-center gap-8 px-5 pt-16 pb-40'>
                <h2 className="max-w-[350px] text-[#000000] text-[32px] text-center font-semibold font-poppins">The Honest <span className='text-[#95C22B]'>Review</span> From Our Client</h2>
                <p className='max-w-[425px] text-[#3F3F3F] text-xl text-center font-normal font-poppins'>See what our patients are saying about their experiences at our clinic.</p>
                <div className=' z-20 bg-white max-w-[640px] flex flex-col items-center gap-12 rounded-2xl shadow-2xl p-10'>
                    <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa.</p>
                    <div className="profile flex justify-center items-start gap-6">
                        <div className="profile-picture">
                            <img src={ProfileImg} />
                        </div>
                        <div>
                            <h4 className=' text-[#3F3F3F] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                            <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-3 pt-20'>
                    <IoMdArrowBack fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
                    <IoMdArrowForward fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
                </div>
                <div className=' absolute z-10 left-[12%] mt-48'>
                    <div className=' relative flex justify-center items-center'>
                        <img src={ProfileImg} alt="" className=' absolute z-10 left-[0%] bottom-[25%]' />
                        <div className='relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                            <img src={ProfileImg} alt="" className=' absolute z-10 left-[25%] bottom-[18%]' />
                            <img src={ProfileImg} alt="" className=' absolute z-10 left-[18%] top-[25%]' />
                            <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                                <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' absolute right-[12%] mt-48'>
                    <div className=' relative flex justify-center items-center'>
                        <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] top-[18%]' />
                        <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] bottom-[18%]' />
                        <div className='relative w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                            <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                                <img src={ProfileImg} alt="" className=' absolute right-[16%] top-[42%]' />
                                <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ClientReview
