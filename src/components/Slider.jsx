import React from 'react'
import PhoneImg from '../assets/main.png'

const Slider = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className=' w-[85%] flex justify-between items-center gap-10 flex-wrap py-16'>
                <div className=''>
                    <h2 className='text-[#000000] text-4xl font-semibold font-poppins ps-3'>Lorem Ipsum</h2>
                    <p className='max-w-[535px] text-[#000000] text-base font-normal font-poppins ps-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque quasi architecto beatae vitae dicta sunt  explicabo.</p>
                    <div className=' flex gap-5 pt-8'>
                        <div className="slider w-[16px] h-[390px] bg-[#E8F7CA] rounded-[16px]">
                            <div className="slider w-[16px] h-[80px] bg-[#95C22B] rounded-[16px]"></div>
                        </div>
                        <div>
                            <h4 className='text-[#000000] text-2xl font-medium font-poppins mt-5'>Lorem Ipsum</h4>
                            {/* <p className='text-[#737373] text-base font-light font-poppins'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p> */}
                            <h4 className=' text-[#000000] text-2xl font-medium font-poppins mt-5'>Lorem Ipsum</h4>
                            <p className='max-w-[430px] text-[#737373] text-base font-light font-poppins'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p>
                            <h4 className='text-[#000000] text-2xl font-medium font-poppins mt-5'>Lorem Ipsum</h4>
                            {/* <p className='text-[#737373] text-base font-light font-poppins hidden'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    <img src={PhoneImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Slider
