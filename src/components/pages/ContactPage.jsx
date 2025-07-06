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
    <div className='pb-24'>
      <Nav />
    </div>

    <div className='grid relative grid-cols-1 md:grid-cols-2 lg:gap-2 gap-2 w-full'>
        <div className="line topl"></div>
    <div className="line leftl"></div>
    <div className="line bottoml"></div>
    <div className="line rightl"></div>
    <section className='flex max-w-2xl h-full justify-center items-center italiana px-6 py-12 flex-col gap-8'> 
        <h2 className='font-black relative text-lg md:text-xl border-b-2 border-[#a78bfa] py-2'>{lang === 'en' ? 'Looking for a personalized solution?': 'Buscas una solución personalizada?'}</h2>
        <h2 className='font-medium relative text-gray-300 text-center px-4 md:text-xl py-1'>{lang === 'en' ? 'Need a team ready to help you use technology to grow your business?' : 'Necesitas un equipo listo para ayudarte a utilizar la tecnología para hacer crecer tu negocio?'}</h2>
        <p className='my-3 px-4 font-medium text-gray-300 text-center relative leading-relaxed'>{lang === 'en' ? "You’re in the right place, leave us a message with your details, and we’ll get in touch with you!" : 'Estás en el lugar indicado, dejanos un mensaje con tus datos y nos pondremos en contacto contigo!'}</p>

    </section>
   <div className='mb-4 flex justify-center'>
   <Contact />
    
   </div>
    
    </div>
    </div>
    <Footer/>
    </>

  )
}

export default ContactPage