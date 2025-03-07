import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
  return (
    <div className='container-conic flex'>
        <div className='flex flex-col'>
        <section className='flex flex-col relative bg-[rgba(36,36,36,0.22)] m-auto backdrop-blur-xs w-screen h-full items-center'>
           <article className='p-2 leading-relaxed flex max-w-3xl flex-col gap-2'>
           <h2 className='text-xl'>Dejanos unos datos y el día en que prefieras que te contactemos</h2>
           
            <p>Hablaremos sobre tu negocio, sus necesidades y como podemos lograr la <b>solución perfecta</b> para vos y mejorar tus procesos de negocio</p>
            <small className='flex justify-center w-full'>Horario: 9:00 a 17:00 (GMT-3)</small>
            </article> 
            <form className='bg-[#17171712] backdrop-blur-sm w-full max-w-2xl p-6' action="">
                <div className='flex flex-col gap-2 my-2'>
                <label htmlFor="">Tu nombre o el de tu negocio:</label>
                <input className='border-[#a78bfa] border p-1' type="text" placeholder='' required id='' name=''/>
                </div>
                <div className='flex flex-col gap-2 my-2'>
                <label htmlFor="">Dirección de correo:</label>
                <input className='border-[#a78bfa] border p-1' type="text" placeholder='' required id='' name=''/>
                </div>
                <div className='flex flex-col gap-2 my-2'>
                <label htmlFor="">Número de telefono:</label>
                <input className='border-[#a78bfa] border p-1' type="text" placeholder='' required id='' name=''/>
                </div>
                <div className='flex flex-col gap-2 my-2'>
                <label htmlFor="">Fecha:</label>
                <input className='border-[#a78bfa] border p-1' type="date" placeholder='' required id='' name=''/>
                </div>
                <button className='w-max cursor-pointer hover:opacity-70 my-4 border border-[#a78bfa] mx-auto p-4'>Enviar datos</button>
            </form>
        </section>
        <section className='relative w-full text-center p-2 underline'>
            <Link to={'/'}>
            Volver
            </Link>
        </section>
        </div>



    </div>
  )
}

export default Consultation