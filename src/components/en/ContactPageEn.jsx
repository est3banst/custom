import React from 'react'
import NavEn from './NavEn'
import ContactEn from './ContactEn'
import FooterEn from './FooterEn'
import { useInView } from 'react-intersection-observer'
import useScrollTop from '../hooks/useScrollTop'

const ContactPageEn = () => {
   useScrollTop()

  const { ref: contactRef, inView: inViewContact } = useInView({ threshold: 0.1 });
  return (
    <>
    <div className='w-full'>
    <NavEn />
    <div className='pt-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-2 gap-4 w-full'>
    <section className='flex w-full h-full justify-center items-center italiana px-2 py-4 flex-col gap-8'> 
    <h2 className='font-bold text-xl border-b-2 border-[#a78bfa] py-2'>Looking for a personalized solution?</h2>
    <h2 className='font-bold px-2 text-xl py-1'>Need a team ready to help you use technology to grow your business?</h2>
    <p className='px-4 my-3 leading-relaxed'>You’re in the right place, leave us a message with your details, and we’ll get in touch with you!</p>
</section>

   <div className='mb-4 flex justify-center'>
   <ContactEn />
    
   </div>
    
    </div>
    <div ref={contactRef} className={`load-bord transition-all duration-[320ms] ${inViewContact ? 'startAnim' : ''}`}></div>
    </div>
    <FooterEn/>
    </>

  )
}

export default ContactPageEn