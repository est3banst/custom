import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const FooterEn = () => {
  const location = useLocation(); 
  const { ref, inView } = useInView({ threshold: 0.1 });
  const yearToday = new Date().getFullYear();

  return (
    <>
      <div className='h-auto grid grid-cols-1 p-4 md:grid-cols-2 w-full gap-4'>
        <div className='flex flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>Links</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/en/faq' className={`hover-footer ${location.pathname === '/en/faq' ? 'text-[#a78bfa] font-bold' : ''}`}>
            FAQ
          </Link>
          <Link to='/en/plans' className={`hover-footer ${location.pathname === '/en/plans' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Plans
          </Link>
          <Link to='/en/about' className={`hover-footer ${location.pathname === '/en/about' ? 'text-[#a78bfa] font-bold' : ''} `}>
            About Us
          </Link>
          <Link to='/en/contact' className={`hover-footer ${location.pathname === '/en/contact' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Contact
          </Link>
        </div>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className='border-b-2 border-slate-50 w-max'>Services</h2>
        <div className='flex flex-col gap-5'>
          <Link to='/en/services/spa-service' className={`hover-footer ${location.pathname === '/en/services/spa-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Landing pages - SPA(Single Page Apps)
          </Link>
          <Link to='/en/services/ecommerce' className={`hover-footer ${location.pathname === '/en/services/ecommerce' ? 'text-[#a78bfa] font-bold' : ''}`}>
            E-commerce
          </Link>
          <Link to='/en/services/crm' className={`hover-footer ${location.pathname === '/en/services/crm' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Managment Systems
          </Link>
          <Link to='/en/services/support-service' className={`hover-footer ${location.pathname === '/en/services/support-service' ? 'text-[#a78bfa] font-bold' : ''}`}>
            Web support
          </Link>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='border-b-2 border-slate-50 w-max'>
          Contact
          </h2>
          <div className='flex flex-col gap-5'>
            <a 
            className='underline hover-footer font-medium'
            href="mailto:info@kustomdev.com">Send us a mail &rarr;</a>
            <small className='font-bold hover-footer text-base'>info@kustomdev.com</small>
          </div>
        </div>
      </div>

      <div ref={ref} className={`load-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>

      <section className='flex orbitron gap-5 items-center justify-center py-2'>
        <span>Kustom</span>
        <small>Web Solutions &copy; {yearToday}</small>
      </section>
      <div className='flex text-xs leading-relaxed py-2 gap-4 justify-center w-full'>
        <a href="">Privacy policy</a>
        <a href="">Terms of service</a>
      </div>
    </>
  );
};

export default FooterEn;
