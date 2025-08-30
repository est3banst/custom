import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../config/LanguageContext';

const Footer = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });
  const yearToday = new Date().getFullYear();
  const {lang} = useLanguage();

  return (
    <>

    <div className='flex rounded-t-4xl border-t-2 border-slate-100 rounded-br-lg flex-col items-center shadow-lg justify-center gap-4 py-5'>
            <h2 className='contents-size text-gray-200 px-1 pb-2 pt-4'>{lang === 'en' ? 'At Kustom we build tailored web solution to boost your business and improve your workflows' : 'En Kustom creamos soluciones web personalizadas para potenciar tu negocio y mejorar tus flujos de trabajo'}</h2>

      <Link to='/contact' className='action'>{lang === 'en' ? 'Get to know us' : 'Charlemos'}</Link>
    </div>
      <div className='h-auto rounded-t-4xl border-t-2 border-slate-100 grid grid-cols-1 px-4 py-10 md:grid-cols-2 w-full gap-4'>
        <div className='flex flex-col gap-4'>
        <h2 className={`${location.pathname === '/' ? 'border-[#a78bfa]' : 'border-slate-50'} border-b-2 font-bold text-lg w-max`}>{ lang === 'en' ? 'Links' : 'Vínculos'}</h2>
        <div className='flex flex-col gap-5'>
          <NavLink
  to='/faq'
  className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }
>
  {lang === 'en' ? 'FAQ' : 'Preguntas Frecuentes'}
</NavLink>
         <NavLink
  to='/about'
  className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }
>
  {lang === 'en' ? 'About us' : 'Nosotros'}
</NavLink>
         <NavLink
  to='/contact'
  className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }
>
  {lang === 'en' ? 'Contact' : 'Contacto'}
</NavLink>
        </div>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className={`${location.pathname === '/services' ? 'border-[#a78bfa]' : 'border-slate-50'} font-bold text-lg border-b-2 w-max`}>{lang === 'en' ? 'Services' : 'Servicios'}</h2>
        <div className='flex flex-col gap-5'>
          <NavLink to='/services/spa-service' 
           className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }>
            { lang === 'en' ? 'Landing pages - SPA(Single Page Apps)' : 'Landing pages o SPA'}
          </NavLink>
          <NavLink to='/services/ecommerce' 
          className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }>
            E-commerce
          </NavLink>
          <NavLink to='/services/support-service' 
          className={({ isActive }) =>
    `py-2 hover:opacity-90 ${isActive ? 'text-[#a78bfa] font-bold' : 'text-gray-300 font-medium'}`
  }>
            { lang === 'en' ? 'Web support' : 'Soporte Web'}
          </NavLink>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className={`${location.pathname === '/contact' ? 'border-[#a78bfa]' : 'border-slate-50'} font-bold text-lg border-b-2 w-max`}>
          { lang === 'en' ? 'Contact' : 'Contacto'}
          </h2>
          <div className='flex flex-col gap-5'>
            <a 
            className='uppercase underline font-bold text-base'
            target='_blank'
            rel='noopener noreferer' href="https://www.instagram.com/kustom_desarrollo/">
             <small className=''>instagram</small>
              </a>
            <a 
            className='underline   font-medium'
            href="mailto:info@kustomdev.com">{ lang === 'en' ? 'Send us a mail' : 'Envíanos un mail'} &rarr;</a>
            <small className='font-bold   text-base'>info@kustomdev.com</small>
            
          </div>
        </div>
      </div>

      <div ref={ref} className={`load-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>

      <section className='flex flex-col orbitron gap-5 items-center justify-center py-2'>
        <span>Kustom   &copy; {yearToday}</span> 
        <small>{lang === 'en' ? 'Web development at your reach' : 'Desarrollo web a tu alcance'}</small>
      </section>
      <div className='flex text-xs leading-relaxed py-2 gap-4 justify-center w-full'>
        <a href="#">{ lang === 'en' ? 'Privacy policy' : 'Política de privacidad'}</a>
        <a href="#">{ lang === 'en' ? 'Terms of service' : 'Términos del servicio'}</a>
      </div>
    </>
  );
};

export default Footer;
