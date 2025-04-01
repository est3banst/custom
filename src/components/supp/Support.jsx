import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import { useLanguage } from '../../config/LanguageContext'

const Support = () => {
  const {lang} = useLanguage();
  return (
    <>
    <div className='pb-24'>
    <Nav />
    </div>
    <div className='container-conic'>
        <div className='relative p-2'>
        <section className='flex flex-col justify-center gap-2 leading-relaxed font-medium px-2 py-8'>
            <h2>{ lang === 'en' ? 'Is your website slow, not bringing in customers, or not representing your brand because it was made a long time ago?' : 'Tu web es lenta, no te trae clientes o no representa tu marca debido a que fue hecha hace mucho?'}</h2>
            <hr />
            <h2>{lang === 'en' ? "Do you have an online store that doesn't meet your expectations?" : 'Tenes una tienda virtual implementada que no cumple tus expectativas?'}</h2>
            <hr />
            <h2>{lang === 'en' ? 'Did you purchase a system to improve your business management, but instead of speeding up your processes, it slows you down due to long support wait times or just a slow system?' : 'Adquiriste un sistema para mejorar la gestión de tu negocio y en lugar de agilizar tus procesos te enlentece, debido a largos tiempos de espera por el soporte o simplemente un sistema lento?'}</h2>
        </section>
        <section className='bg-[#24242493] px-5 py-10'>
            <h2 className='font-bold text-xl'>{lang === 'en' ? 'We are your ideal partner to help you use technology efficiently, so you don’t have to spend mountains of money re-hiring over and over to get the same results' : 'Somos tu socio ideal para que puedas usar la tecnología de manera eficiente, y no tengas que gastar montañas de dinero debido a recontratar una y otra vez para obtener lo mismo'}</h2>
           <Link to="/contact" >
           <button className='action'>{lang === 'en' ? 'Get started' : 'Comenza hoy'}</button>
           </Link>
        </section>
        </div>

        <section className='relative w-full text-center underline py-4'>
        <Link to="/">
        {lang === 'en' ? 'Go back' : 'Volver'}</Link>
        </section>
     
    </div>
    <div className='relative pt-64'>
   <Footer />
   </div>
   
    </>
  )
}

export default Support