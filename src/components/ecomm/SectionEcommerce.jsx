import React from 'react'

const SectionEcommerce = ({ title, text, svg }) => {
    return (
        
                <div className='flex backdrop-blur-xs bg-[#00000020] flex-col justify-between rounded-xs shadow-lg p-5 min-h-[250px] items-center'>
                    <section className='w-5/6 flex justify-center'>
                    {svg}
                    </section>
                    <div className='w-full'>
                        <h2 className='text-xl font-black border-b-2 py-2 mb-2 border-[#a78bfa] w-full'>{title}</h2>

                        <p className=''>{text}</p>
                    </div>


                </div>
    )
}

export default SectionEcommerce