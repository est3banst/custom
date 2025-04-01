import React from 'react'
import Nav from '../Nav'
import Contact from '../Contact'
import Footer from '../Footer'
import { useInView } from 'react-intersection-observer'
import useScrollTop from '../hooks/useScrollTop'
import { useLanguage } from '../../config/LanguageContext'

const ContactPage = () => {

  const {lang} = useLanguage();
   useScrollTop()

  const { ref: contactRef, inView: inViewContact } = useInView({ threshold: 0.1 });
  return (
    <>
    <div className='w-full'>
    <Nav />
    <div className='pt-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-2 gap-4 w-full'>
    <section className='flex w-full h-full justify-center items-center italiana px-2 py-4 flex-col gap-8'> 
        <h2 className='font-bold text-xl border-b-2 border-[#a78bfa] py-2'>{lang === 'en' ? 'Looking for a personalized solution?': 'Buscas una solución personalizada ?'}</h2>
        <h2 className='font-bold px-2 text-xl py-1'>{lang === 'en' ? 'Need a team ready to help you use technology to grow your business?' : 'Necesitas un equipo listo para ayudarte a utilizar la tecnología para hacer crecer tu negocio?'}</h2>
        <p className='px-4 my-3 leading-relaxed'>{lang === 'en' ? "You’re in the right place, leave us a message with your details, and we’ll get in touch with you!" : 'Estás en el lugar indicado, dejanos un mensaje con tus datos y nos pondremos en contacto contigo!'}</p>
    </section>
   <div className='mb-4 flex justify-center'>
   <Contact />
    
   </div>
    
    </div>
    <div ref={contactRef} className={`load-bord transition-all duration-[320ms] ${inViewContact ? 'startAnim' : ''}`}></div>
    </div>
    <Footer/>
    </>

  )
}

export default ContactPage