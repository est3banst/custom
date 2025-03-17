import React from 'react'
import { Link } from 'react-router-dom'
import CardJob from './CardJob'
import Nav from './Nav'
import Footer from './Footer'

const Portfolio = () => {
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

const appPages = [
  {
    title: 'Sitio web para gimnasio',
    text: 'Promociona tu gimnasio, agenda de clases y más',
    desc: 'Aplicación web de acceso para captar nuevos miembros, agendar clases, gestionar membresías',
    link: 'https://fittness-drive.vercel.app/',
    src: '/gym-web.png'
  },
    {
        title: 'Aplicación de reservas para servicios Odontológicos',
        text: 'Centraliza la gestión de tus reservas',
        desc: 'Tendrás acceso a un panel desde tu celular para ver tus reservas con control total sobre las mismas',
        link: "https://clinic-dent.vercel.app/",
        src: '/dental-clinic.png'
    },
    {
        title: 'Sitio web institucional',
        text: 'Presenta tu marca al mundo',
        desc: 'Sitio web totalmente personalizado, plataforma para ofrecer/promocionar tus servicios/productos',
        link: "https://saltoinstalaciones.com",
        src: '/personal-web.png'
    }
    ,
    

]