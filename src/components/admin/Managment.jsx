import React from 'react'

const Managment = ({ title, text, icon }) => {
  return (
    <>

        <div 
        className='flex backdrop-blur-md bg-[#00000020] flex-col justify-between rounded-xs shadow-lg p-5 min-h-[250px] items-center'>
                    <section className='w-5/6 items-center flex justify-center'>
                   {icon}
                    </section>
                    <div className='w-full'>
                        <h2 className='text-base border-b-2 font-black md:py-2 mb-2 border-[#a78bfa] w-full'>{title}</h2>

                        <p className=''>{text}</p>
                    </div>


                </div>
 
    </>
  )
}

export default Managment