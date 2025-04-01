import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../config/LanguageContext';

const Footer = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });
  const yearToday = new Date().getFullYear();
  const {lang} = useLanguage();

  return (
    <>
      <div className='h-auto grid grid-cols-1 p-4 md:grid-cols-2 w-full gap-4'>
        <div className='flex flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>{ lang === 'en' ? 'Links' : 'Vínculos'}</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/faq' className={`hover-footer ${location.pathname === '/faq' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'FAQ' : 'Preguntas Frecuentes'}
          </Link>
          <Link to='/plans' className={`hover-footer ${location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Plans' : 'Planes'}
          </Link>
          <Link to='/about' className={`hover-footer ${location.pathname === '/about' ? 'text-[#a78bfa] font-bold' : ''} `}>
            { lang === 'en' ? 'About us' : 'Nosotros'}
          </Link>
          <Link to='/contact' className={`hover-footer ${location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Contact' : 'Contacto'}
          </Link>
        </div>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>{lang === 'en' ? 'Services' : 'Servicios'}</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/services/spa-service' className={`hover-footer ${location.pathname === '/services/spa-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Landing pages - SPA(Single Page Apps)' : 'Landing pages o SPA'}
          </Link>
          <Link to='/services/ecommerce' className={`hover-footer ${location.pathname === '/services/ecommerce' ? 'text-[#a78bfa] font-bold' : ''}`}>
            E-commerce
          </Link>
          <Link to='/services/crm' className={`hover-footer ${location.pathname === '/services/crm' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Managment Systems' : 'Sistemas de administración'}
          </Link>
          <Link to='/services/support-service' className={`hover-footer ${location.pathname === '/services/support-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Web support' : 'Soporte Web'}
          </Link>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='border-b-2 border-slate-50 w-max'>
          { lang === 'en' ? 'Contact' : 'Contacto'}
          </h2>
          <div className='flex flex-col gap-5'>
            <a 
            className='underline hover-footer font-medium'
            href="mailto:info@kustomdev.com">{ lang === 'en' ? 'Send us a mail' : 'Envíanos un mail'} &rarr;</a>
            <small className='font-bold hover-footer text-base'>info@kustomdev.com</small>
          </div>
        </div>
      </div>

      <div ref={ref} className={`load-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>

      <section className='flex orbitron gap-5 items-center justify-center py-2'>
        <span>Kustom</span> -
        <small>{lang === 'en' ? 'Connecting more' : 'Conectando más'} &copy; {yearToday}</small>
      </section>
      <div className='flex text-xs leading-relaxed py-2 gap-4 justify-center w-full'>
        <a href="">{ lang === 'en' ? 'Privacy policy' : 'Política de privacidad'}</a>
        <a href="">{ lang === 'en' ? 'Terms of service' : 'Términos del servicio'}</a>
      </div>
    </>
  );
};

export default Footer;
