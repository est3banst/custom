import React from 'react'
import Landings from './Landings'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import Section from './Section'
import { useEffect } from 'react'

const Layout = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])
  return (
    <div className='h-screen bg-[#171717]'>
        <Nav/>
        <Section />
       <div className='md:flex md:gap-12 md:relative'>
       <Landings />
        <div className='mb-6 md:fixed md:top-[65%] lg:w-3/6 md:w-4/6 md:right-0 flex flex-col gap-4 translate-y-[-120px] px-4 pb-4'>
        <p className='p-5 text-xl md:text-3xl'>
        En la era digital, no tener un sitio web es como no existir para miles de clientes potenciales. 
        ¿Realmente quieres perder oportunidades solo porque tu negocio no está en línea?
        </p>
        <Link to="/">
        <button className='action'>Ver portfolio</button>
        </Link>
        </div>
       </div>
    </div>
  )
}

export default Layout