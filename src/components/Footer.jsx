import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });
  const yearToday = new Date().getFullYear();

  return (
    <>
      <div className='h-auto my-8 py-4 px-3 flex w-full flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>Vínculos</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/faq' className={`hover-footer ${location.pathname === '/faq' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Preguntas Frecuentes
          </Link>
          <Link to='/plans' className={`hover-footer ${location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Planes
          </Link>
          <Link to='/about' className={`hover-footer ${location.pathname === '/about' ? 'text-[#a78bfa] font-bold' : ''} `}>
            Nosotros
          </Link>
          <Link to='/contact' className={`hover-footer ${location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Contacto
          </Link>
        </div>

        <h2 className='border-b-2 border-slate-50 w-max'>Servicios</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/services/spa-service' className={`hover-footer ${location.pathname === '/services/spa-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Landing pages o SPA
          </Link>
          <Link to='/services/ecommerce' className={`hover-footer ${location.pathname === '/services/ecommerce' ? 'text-[#a78bfa] font-bold' : ''}`}>
            E-commerce
          </Link>
          <Link to='/services/crm' className={`hover-footer ${location.pathname === '/services/crm' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Sistemas de administración
          </Link>
        </div>
      </div>

      <div ref={ref} className={`load-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>

      <section className='flex orbitron gap-4 items-center justify-center py-2'>
        <span>Kustom</span>
        <small>Soluciones Web &copy; {yearToday}</small>
      </section>
    </>
  );
};

export default Footer;
