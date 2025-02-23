import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <div className='h-auto my-8 p-4 flex w-full flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>Vínculos</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/faq' className={location.pathname === '/faq' ? 'text-[#a78bfa] font-bold' : ''}>
            Preguntas Frecuentes
          </Link>
          <Link to='/plans' className={location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''}>
            Planes
          </Link>
          <Link to='/about' className={location.pathname === '/about' ? 'text-[#a78bfa] font-bold' : ''}>
            Nosotros
          </Link>
          <Link to='/contact' className={location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''}>
            Contacto
          </Link>
        </div>

        <h2 className='border-b-2 border-slate-50 w-max'>Servicios</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/services/spa-service' className={location.pathname === '/services/spa-service' ? 'text-[#a78bfa] font-bold' : ''}>
            Landing pages o SPA
          </Link>
          <Link to='/services/ecommerce' className={location.pathname === '/services/ecommerce' ? 'text-[#a78bfa] font-bold' : ''}>
            E-commerce
          </Link>
          <Link to='/services/cms' className={location.pathname === '/services/cms' ? 'text-[#a78bfa] font-bold' : ''}>
            Sistemas de administración
          </Link>
        </div>
      </div>

      <div ref={ref} className={`load-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>

      <section className='flex gap-4 items-center justify-center py-2'>
        <span>Custom</span>
        <small>Soluciones Web &copy;</small>
      </section>
    </>
  );
};

export default Footer;
