import React from 'react'
import Landings from './Landings'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import Section from './Section'
import { useEffect } from 'react'
import Footer from '../Footer'

const Layout = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])
  return (
    <>
    <div className='min-h-screen grid grid-cols-1 relative bg-[#171717]'>
        <Nav/>
        <Section />
       <div className='md:flex relative md:gap-8'>
       <Landings />
       <div className='block md:w-5/6 mt-5 px-2 pb-4'>
                        <div className='md:sticky md:top-30'>
                            <p className='p-2 text-xl md:text-2xl'>
                                En la era digital, no tener un sitio web es como no existir para miles de clientes potenciales.
                                ¿Realmente quieres perder oportunidades solo porque tu negocio no está en línea?
                            </p>
                            <Link to="/">
                                <button className='action'>Ver portfolio</button>
                            </Link>
                        </div>
                    </div>
       </div>
       <div className=''>
       <Footer />
       </div>
    </div>
    
    </>
  )
}

export default Layout