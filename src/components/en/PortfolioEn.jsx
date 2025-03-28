import React from 'react'
import { Link } from 'react-router-dom'
import CardJob from '../CardJob'
import NavEn from './NavEn'
import FooterEn from './FooterEn'

const Portfolio = () => {
  return (
    <>
    <NavEn/>
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
    <FooterEn />
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

const appPages = [
    {
      title: 'Gym Website',
      text: 'Promote your gym, class schedule, and more',
      desc: 'Web application for new member recruitment, class scheduling, and membership management',
      link: 'https://fittness-drive.vercel.app/',
      src: '/gym-web.png'
    },
    {
      title: 'Dental Services Booking App',
      text: 'Centralize the management of your bookings',
      desc: 'Access a dashboard from your phone to view and have full control over your bookings',
      link: "https://clinic-dent.vercel.app/",
      src: '/dental-clinic.png'
    },
    {
      title: 'Nail Salon Booking Application',
      text: 'Better management of your bookings and a general record of each service',
      desc: 'Your clients will be able to access the website to make reservations. You will have access to a panel from your phone or laptop to manage your bookings',
      link: 'https://gloss-nails.vercel.app/',
      src : '/nail-reservas.png'
    },
    {
      title: 'Corporate Website',
      text: 'Present your brand to the world',
      desc: 'Fully customized website, platform to offer/promote your services/products',
      link: "https://saltoinstalaciones.com",
      src: '/personal-web.png'
    },
  ]
  