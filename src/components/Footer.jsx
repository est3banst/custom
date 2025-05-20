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

    <h2 className='text-2xl bg-white/5 shadow-lg font-bold px-2 py-8'>{lang === 'en' ? 'At Kustom we build tailored web solution to boost your business and improve your workflows' : 'En Kustom creamos soluciones web personalizadas para potenciar tu negocio y mejorar tus flujos de trabajo'}</h2>
    <div className='flex bg-white/5 flex-col items-center justify-center gap-4 py-8'>
        <div className='flex justify-center gap-4 items-center'> 
          <p className='text-xl border-b-2 border-[#a78bf2] text-center'>{lang === 'en' ? 'We help you grow' : 'Te ayudamos a crecer'}</p>
      <motion.svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      initial={{ scale: 0, opacity: 0 }}
      animate={svgInView ? { scale: 1.4, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 200 }}
    >
      <g fill="none">
        <path
          fill="#86d72f"
          d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"
        />
        <path
          fill="#6d4534"
          d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"
        />
      </g>
    </motion.svg>
        </div>
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
