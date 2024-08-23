import React from 'react'

const MiniInformation = ({number}) => {
    return (
        <div className='w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
            <span className='text-[#000000] text-2xl font-medium font-poppins'>{number}</span>
            <p className='text-[#000000] text-xs font-normal font-poppins'>Expert<br />
                Dentist</p>
        </div>
    )
}

export default MiniInformation
