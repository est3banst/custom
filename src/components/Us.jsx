import React from 'react'
import { Link } from 'react-router-dom'
import Lighting from './Lighting'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../config/LanguageContext'

const Us = () => {
  const { lang } = useLanguage();
  const { ref: ref1 , inView: inView1 } = useInView({
    threshold: 0.1
  })
  const { ref: ref2 , inView: inView2 } = useInView({
    threshold: 0.1
  })
    return (
        <>
        <Lighting>
        <div className='flex font-medium flex-col w-full justify-center m-auto relative h-auto gap-4'>
      <div>
        <h2 className='uppercase text-[#a78bda] text-3xl md:text-4xl font-bold text-center'>
        {lang === 'en' ? 'Your web your way' : 'Tu web a tu manera'}
        </h2></div>
      <div className="outer">
  <div className="card">
     <div ref={ref1} className={`relative z-50 backdrop-blur-2x transition-all duration-500 ease-in px-2 items-center gap-4 py-12 flex w-full flex-col ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
  <div className="flex items-start gap-2">
    <svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"></path>
</svg>
    <p className='leading-relaxed'>
      {lang === 'en' ? 'We design and develop modern, scalable, and high-performance websites tailored to your needs' : 'Diseñamos y desarrollamos sitios web modernos, escalables y de alto rendimiento adaptados a tus necesidades'}
    </p>
  </div>
  <div className="flex items-start gap-2">
<svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"></path>
</svg>    <p className='leading-relaxed'>
      {lang === 'en' ? 'Specializing in websites that convert visitors into customers' : 'Especializados en sitios web que convierten visitantes en clientes'}
    </p>
  </div>
  <div className="flex items-start gap-2">
<svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"></path>
</svg>    <p className='leading-relaxed'>
      {lang === 'en' ? 'Elevate your digital presence with sophisticated interactions and a unique brand identity' : 'Eleva tu presencia digital con interacciones sofisticadas y una identidad de marca única'}
    </p>
  </div>
</div>
 
  </div>
</div>
     

          <div ref={ref2} className={`card backdrop-blur-xs text-base flex transition-all duration-500 ease-in flex-col leading-relaxed gap-3 py-12 px-4 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={24} viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1}>
		<path strokeLinecap="round" strokeWidth={2.5} d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
		<path strokeWidth={3.75} d="M12 16h.01v.01H12z"></path>
		<path strokeLinecap="round" strokeWidth={2.5} d="M12 12V8"></path>
	</g>
</svg>
            <p className='py-4'>{ lang === 'en' ? "Everyone does an online search before hiring a service or paying for a product. If you're not there, you're likely to lose that potential customer" : 'Todo el mundo antes de contratar un servicio o pagar un producto hace una búsqueda en línea, si no estás es muy probable que pierdas ese potencial cliente'}</p>
         
            <p className='py-4'>{ lang === 'en' ? 'You take care of your business while we build your digital brand' : 'Vos te ocupas de tu negocio mientras nosotros construimos tu marca digital'}</p>
            
            </div>
            <p className='text-2xl text-center self-center w-max border-b-2 border-[#a78bfa] font-semibold'>
                { lang === 'en' ? 'The wait is over' : 'Comenzamos ?'}
            </p>
            <section className='flex p-3 items-center justify-center'>
                <Link to="/contact">
                <button className="action">{ lang === 'en' ? 'Get in touch' : 'Contactar'}</button>
                </Link>
            </section>
            <div className="line topl"></div>
    <div className="line leftl"></div>
    <div className="line bottoml"></div>
    <div className="line rightl"></div>
        </div>
        </Lighting>
        
        </>
    )
}

export default Us