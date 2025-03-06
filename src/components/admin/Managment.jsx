import React from 'react'

const Managment = ({ title, text, icon }) => {
  return (
    <>

<div className='flex bg-[#242424] flex-col justify-between rounded-e-2xl rounded-es-2xl shadow-lg p-8 min-h-[250px] items-center'>
<section className='w-5/6 items-center flex justify-center'>
                   {icon}
                    </section>
                    <div className='w-full'>
                        <h2 className='text-base text-[#f2f2f2] border-b-2 font-black md:py-2 mb-2 border-[#a78bfa] w-full'>{title}</h2>

                        <p className='text-[#f2f2f2]'>{text}</p>
                    </div>


                </div>
 
    </>
  )
}

export default Managment