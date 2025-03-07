import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <>
    <div className='container-conic'>
        <div className='relative p-4'>
        <section className='flex flex-col justify-center gap-2 leading-relaxed font-medium p-6'>
            <h2>Tu web es lenta, no te trae clientes o no representa tu marca debido a que fue hecha hace mucho?</h2>
            <hr />
            <h2>Tenes una tienda virtual implementada que no cumple tus expectativas?</h2>
            <hr />
            <h2>Adquiriste un sistema para mejorar la gestión de tu negocio y en lugar de agilizar tus procesos te enlentece, debido a largos tiempos de espera por el soporte o simplemente un sistema lento?</h2>
        </section>
        <section className='bg-[#24242493] px-2 py-6'>
            <h2 className='font-bold text-xl'>Somos tu socio ideal para que puedas usar la tecnología de manera eficiente, y no tengas que gastar montañas de dinero debido a recontratar una y otra vez para obtener lo mismo</h2>
            <button className='action'>Comenza hoy</button>
        </section>
        </div>

        <section className='relative w-full text-center underline py-4'>
        <Link to="/">
        Volver</Link>
        </section>
    </div>
    </>
  )
}

export default Support