import React from 'react'
import Landings from './Landings'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import Section from './Section'
import Footer from '../Footer'
import useScrollTop from '../hooks/useScrollTop'
import { useLanguage } from '../../config/LanguageContext'

const Layout = () => {
    useScrollTop();
    const { lang } = useLanguage();
  return (
    <>
    <div className='min-h-screen grid grid-cols-1 relative supp-bg'>
        <Nav/>
        <Section />
       <div className='md:flex relative md:gap-8'>
       <Landings />
       <div className='block md:w-5/6 mt-5 px-2 pb-4'>
                        <div className='md:sticky md:top-30'>
                            <p className='p-2 text-base leading-relaxed md:text-xl'>
                                { lang === 'en' ? "In the digital age, not having a website is like not existing for thousands of potential customers. Do you really want to miss opportunities just because your business isn't online?" : 'En la era digital, no tener un sitio web es como no existir para miles de clientes potenciales. ¿Realmente quieres perder oportunidades solo porque tu negocio no está en línea?'}
                            </p>
                            <Link to="/portfolio">
                                <button className='action'>{lang === 'en' ? 'See portfolio' : 'Ver portfolio'}</button>
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