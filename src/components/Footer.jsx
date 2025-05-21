import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../config/LanguageContext';

const Footer = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { ref: svgRef, inView: svgInView } = useInView({ threshold: 0.1 });
  const yearToday = new Date().getFullYear();
  const {lang} = useLanguage();

  return (
    <>

    <h2 className='contents-size shadow-lg px-4 pb-2 pt-4'>{lang === 'en' ? 'At Kustom we build tailored web solution to boost your business and improve your workflows' : 'En Kustom creamos soluciones web personalizadas para potenciar tu negocio y mejorar tus flujos de trabajo'}</h2>
    <div className='flex flex-col items-center justify-center gap-4 py-5'>
        
      <Link to='/contact' className='action'>{lang === 'en' ? 'Get to know us' : 'Charlemos'}</Link>
    </div>
      <div className='h-auto grid grid-cols-1 px-4 py-10 md:grid-cols-2 w-full gap-4'>
        <div className='flex flex-col gap-4'>
        <h2 className={`${location.pathname === '/' ? 'border-[#a78bfa]' : 'border-slate-50'} border-b-2 w-max`}>{ lang === 'en' ? 'Links' : 'Vínculos'}</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/faq' className={`py-2 hover:opacity-90 ${location.pathname === '/faq' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'FAQ' : 'Preguntas Frecuentes'}
          </Link>
          <Link to='/plans' className={`py-2 hover:opacity-90 ${location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Plans' : 'Planes'}
          </Link>
          <Link to='/about' className={`py-2 hover:opacity-90 ${location.pathname === '/about' ? 'text-[#a78bfa] font-bold' : ''} `}>
            { lang === 'en' ? 'About us' : 'Nosotros'}
          </Link>
          <Link to='/contact' className={`py-2 hover:opacity-90 ${location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Contact' : 'Contacto'}
          </Link>
        </div>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className={`${location.pathname === '/services' ? 'border-[#a78bfa]' : 'border-slate-50'} border-b-2 w-max`}>{lang === 'en' ? 'Services' : 'Servicios'}</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/services/spa-service' className={`py-2 hover:opacity-90 ${location.pathname === '/services/spa-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Landing pages - SPA(Single Page Apps)' : 'Landing pages o SPA'}
          </Link>
          <Link to='/services/ecommerce' className={`py-2 hover:opacity-90 ${location.pathname === '/services/ecommerce' ? 'text-[#a78bfa] font-bold' : ''}`}>
            E-commerce
          </Link>
          <Link to='/services/support-service' className={`py-2 hover:opacity-90 ${location.pathname === '/services/support-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            { lang === 'en' ? 'Web support' : 'Soporte Web'}
          </Link>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className={`${location.pathname === '/contact' ? 'border-[#a78bfa]' : 'border-slate-50'} border-b-2 w-max`}>
          { lang === 'en' ? 'Contact' : 'Contacto'}
          </h2>
          <div className='flex flex-col gap-5'>
            <a 
            className='underline   font-medium'
            href="mailto:info@kustomdev.com">{ lang === 'en' ? 'Send us a mail' : 'Envíanos un mail'} &rarr;</a>
            <small className='font-bold   text-base'>info@kustomdev.com</small>
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
