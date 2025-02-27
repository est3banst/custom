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
    <div className='pt-[100px] flex md:flex-row flex-col lg:gap-2 items-center gap-4 w-full justify-center'>
    <section className='flex w-full italiana px-2 py-4 flex-col gap-4'> 
        <h2 className='font-bold text-xl border-b-2 border-[#a78bfa] md:w-max w-4/6 py-2'>Buscas una solución personalizada ?</h2>
        <p>Estás en el lugar indicado, dejanos un mensaje con tus datos y nos pondremos en contacto contigo!</p>
    </section>
   <div className='mb-4'>
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