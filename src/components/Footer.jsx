import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Footer = () => {
  const [ currentPage, setCurrentPage ] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1
  })

  const currentRoute = window.location.href;
 
  return (
    <>
    <div className='h-auto my-8 p-4 flex w-full flex-col gap-4'>
      <h2 className='border-b-2 w-max' >Vínculos</h2>
      <div className='flex flex-col gap-5'>
      <Link to='/faq'>Preguntas Frecuentes </Link>
      <Link to="/">Planes</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link>Contacto</Link>
      </div>
      <h2 className='border-b-2 w-max'>Servicios</h2>
      <div className='flex flex-col gap-5'>
        <Link to="/services/spa-service">
        Landing pages o SPA
        </Link>
        <Link to="/services/ecommerce">E-commerce
        </Link>
        <Link to="/services/cms">
        Sistemas de administración
        </Link>
      </div>
    </div>
    <div ref={ref} className={`load-bord transition-all duration-[320ms]
            ${
                inView ? 'startAnim' : 
                ''
            }`}></div>
    <section className='flex gap-4 items-center justify-center py-2'>
      <span>Custom</span>
      <small>Soluciones Web &copy;</small>
    </section>
    </>
  )
}

export default Footer