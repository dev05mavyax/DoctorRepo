import React from 'react'
import Image from '../assets/dentist-doing-check-up-patient 1.png'

const Cards = () => {

  const data = [
    {
      image: Image,
      title: "Shield Your Smile: How Dental Sealants Block Cavities",
      date: "June 28, 2024",
    },
    {
      image: Image,
      title: "Shield Your Smile: How Dental Sealants Block Cavities",
      date: "June 28, 2024",
    },
    {
      image: Image,
      title: "Shield Your Smile: How Dental Sealants Block Cavities",
      date: "June 28, 2024",
    }
  ]

  return (
    <section>
      <div className='px-5 py-16'>
        <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins mb-8">Read top <span className='text-[#95C22B]'>articles</span> from experts</h2>
        <div className=' flex justify-center items-center gap-10 flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className="bg-[#FFFFFF] w-[360px]  bg-base-100 shadow-xl rounded-2xl">
              <figure>
                <img
                  src={item.image}
                  alt="Shoes" className='w-[360px] h-[300px] rounded-2xl' />
              </figure>
              <div className="w-[360px] p-5">
                <h3 className="text-[#313131] text-2xl font-medium font-poppins mb-4">{item.title}</h3>
                <p className=' text-[#535353] text-[15px] font-medium font-poppins'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div >
    </section>
  )
}

export default Cards
