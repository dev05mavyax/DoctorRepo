import React from 'react'
import Image1 from '../assets/user-cover-1 (1).png'
import Image2 from '../assets/user-cover-1.png'
import Image3 from '../assets/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI 1.png'


const DentalTeamCard = () => {

    const data = [
        {
            image: Image1,
            name: "Dr. Jeanette Hoff",
            experience: "10+ Yr Exp",
            location: "Delhi, India",
        },
        {
            image: Image2,
            name: "Dr. Jeanette Hoff",
            experience: "10+ Yr Exp",
            location: "Delhi, India",
        },
        {
            image: Image3,
            name: "Dr. Jeanette Hoff",
            experience: "10+ Yr Exp",
            location: "Delhi, India",
        }
    ]

    return (
        <section>
            <div className='bg-[#FFFFFF] px-5 py-16'>
                <h5 className="text-[#95C22B] text-xl text-center font-normal italic font-poppins mb-3">Our Specialised Doctors</h5>
                <h2 className="text-[#252B42] text-[32px] text-center font-semibold font-poppins mb-8">Meet Our Highly Skilled Dental Team</h2>
                <div className=' bg-[#FFFFFF] flex justify-center items-center gap-10 flex-wrap'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='w-[360px]  cursor-pointer shadow-2xl rounded-2xl'>
                                    <figure>
                                        <img
                                            src={item.image}
                                            alt="Shoes" className=' h-[300px] rounded-2xl' />
                                    </figure>
                                    <div className='w-[360px] flex flex-col p-6'>
                                        <h3 className="text-[#2D2D32] text-2xl font-medium font-poppins">{item.name}</h3>
                                        <p className="text-[#474747] text-base font-normal font-poppins">{item.experience}</p>
                                        <p className="text-[#474747] text-base font-normal font-poppins">{item.location}</p>
                                        <button className="text-[#95C22B] text-xl font-semibold font-poppins border-[1px] border-[#95C22B] rounded-2xl py-3 mt-10">View Profile</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default DentalTeamCard