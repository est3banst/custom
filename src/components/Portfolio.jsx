import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='flex container-conic'>
      <section className='text-xl w-full flex h-1/2 my-auto flex-col p-6 font-bold bg-[#24242439] backdrop-blur-xs justify-center items-center'>
      Estamos trabajando para que encuentres todo lo que buscas
      <Link className='my-4 border hover:opacity-60 border-slate-50 p-4' to={'/'} >
      Volver
      </Link>
      </section>
      
    </div>
  )
}

export default Portfolio

const appPages = [
    {
        src: "https://clinic-dent.vercel.app/"
    },
    {
        src: ""
    }
    ,

]