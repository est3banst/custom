import React from 'react'
import { Link } from 'react-router-dom'
import CardJob from './blueprints/CardJob'
import Nav from './Nav'
import Footer from './Footer'
import { useLanguage } from '../config/LanguageContext'

const Portfolio = () => {
  const {lang} = useLanguage();

  const appPages = [
    {
      title: lang === 'en' ? 'Gym Website' : 'Sitio web para gimnasio',
      text: lang === 'en' ? 'Promote your gym, class schedule, and more' : 'Promociona tu gimnasio, agenda de clases y más',
      desc: lang === 'en' ? 'Web application for new member recruitment, class scheduling, and membership management' : 'Aplicación web de acceso para captar nuevos miembros, agendar clases, gestionar membresías',
      link: 'https://fittness-drive.vercel.app/',
      src: '/gym-web.png'
    },
  
      {
          title: lang === 'en' ? 'Dental Services Booking App' : 'Aplicación de reservas para servicios Odontológicos',
          text: lang === 'en' ? 'Centralize the management of your bookings' : 'Centraliza la gestión de tus reservas',
          desc: lang === 'en' ? 'Access a dashboard from your phone to view and have full control over your bookings' : 'Tus clientes podrán acceder a tu web y realizar reservas. Tendrás acceso a un panel desde tu celular para ver tus reservas con control total sobre las mismas',
          link: "https://clinic-dent.vercel.app/",
          src: '/dental-clinic.png'
      },
      {
        title: lang === 'en' ? 'Nail Salon Booking Application' : 'Aplicación de reservas para salón de uñas',
        text: lang === 'en' ? 'Better managment of your reservations and a general record of each client' : 'Mejor gestión de tus reservas y un registro general de cada paciente',
        desc: lang === 'en' ? 'Your clients will be able to access the website to make reservations. You will have access to a panel from your phone or laptop to manage your bookings' : 'Tus clientes podrán acceder a la web a hacer reservas. Tendrás acceso a un panel desde tu celular o laptop para administrar tus reservas',
        link: 'https://gloss-nails.vercel.app/',
        src : '/nail-reservas.png'
      },
      {
          title: lang === 'en' ? 'Corporate Website' : 'Sitio web institucional',
          text: lang === 'en' ? 'Present your brand to the world' : 'Presenta tu marca al mundo',
          desc: lang === 'en' ? 'Fully customized website, platform to offer/promote your services/products' : 'Sitio web totalmente personalizado, plataforma para ofrecer/promocionar tus servicios/productos',
          link: "https://saltoinstalaciones.com",
          src: '/personal-web.png'
      }
      ,
      
  
  ]
  return (
    <>
    <Nav/>
    <div className='flex h-auto'>

     <div className='relative p-4 pt-24 grid grid-cols-1 md:grid-cols-3 gap-6'>
     {appPages.map((app, idx) => (
        <CardJob 
        src={app.src}
        key={idx}
        link={app.link}
        title={app.title}
        text={app.text}
        desc={app.desc}
        />
      ))}
     </div>
     
      
    </div>
    <Footer />
    {/* <section className='text-xl w-full flex h-1/2 my-auto flex-col p-6 font-bold bg-[#24242439] backdrop-blur-xs justify-center items-center'>
      Estamos trabajando para que encuentres todo lo que buscas
      <Link className='my-4 border hover:opacity-60 border-slate-50 p-4' to={'/'} >
      Volver
      </Link>
      </section> */}
    </>
  )
}

export default Portfolio

