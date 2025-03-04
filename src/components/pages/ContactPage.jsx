import React from 'react'
import Nav from '../Nav'
import Contact from '../Contact'
import Footer from '../Footer'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const ContactPage = () => {
    useEffect(() => {
        scrollTo(0, 0)
    },[])

  const { ref: contactRef, inView: inViewContact } = useInView({ threshold: 0.1 });
  return (
    <>
    <div className='w-full'>
    <Nav />
    <div className='pt-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-2 gap-4 w-full'>
    <section className='flex w-full h-full justify-center items-center italiana px-2 py-4 flex-col gap-8'> 
        <h2 className='font-bold text-xl border-b-2 border-[#a78bfa] py-2'>Buscas una solución personalizada ?</h2>
        <p className='px-4 my-6 leading-relaxed'>Estás en el lugar indicado, dejanos un mensaje con tus datos y nos pondremos en contacto contigo!</p>
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