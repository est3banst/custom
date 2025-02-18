import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentRoute = window.location.href;
 
  return (
    <>
    <div className='h-auto my-8 p-4 flex w-full flex-col gap-4'>
      <h2 className='border-b-2 w-max' >Vínculos</h2>
      <div className='flex flex-col gap-5'>
      <Link to='/faq'>Preguntas Frecuentes </Link>
      <Link >Servicios</Link>
      <Link>Contacto</Link>
      </div>
    </div>
    <section className='flex gap-4 items-center justify-center border-t-2 py-2'>
      <span>Custom</span>
      <small>Soluciones Web &copy;</small>
    </section>
    </>
  )
}

export default Footer