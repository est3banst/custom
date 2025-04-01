import React from 'react'

const CardJob = ({ src, title, link, desc, text}) => {
  return (
    <>
    
    <div className='w-full relative h-auto p-6 flex gap-4 hover:translate-y-1 transition-all duration-500 ease-in flex-col'>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>

      <img 
      className='object-contain relative'
      src={src} alt={title} />
      <section className='relative'>
         <a
         target='_blank'
         className='font-bold underline my-2'
         href={link}>{title}</a>
        
          <p>{text}</p>
          <p className='text-gray-400'>{desc}</p>
      </section>
  </div>
    </>
   
  )
}

export default CardJob