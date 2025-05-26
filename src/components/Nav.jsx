import React from 'react'
import Menu from './Menu'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../config/LanguageContext'


const Nav = () => {
    const { lang, setLanguage } = useLanguage();
    const location = useLocation();
    return (
        <header className='z-[90] pt-4 px-4 flex fixed gap-4 top-0 left-0 items-center justify-between w-full'>

       <div className='flex relative justify-between w-full items-center'>
        <section className='absolute top-0'>
       <Link to='/'>
        <img 
        src="/K.png"
        className='relative h-[80px]' alt="Kustom logo" />
       </Link> 
           <div className=''>
           <Menu  />
           </div>
       
        </section>
       
        <div className='hidden md:block w-full'>
        <nav className='hidden md:flex md:w-full px-6'>
               <ul className='flex w-full justify-end gap-3 p-2'>
                  <Link to='/services'>
                     <li className={`${location.pathname.includes('/services') ? 'text-[#a78bfa]' : ''} orbitron border-nav`}>{lang === 'en' ? 'Services' : 'Servicios'}</li>
                    </Link>
                
                   <Link to='/portfolio'>
                   <li className={`${location.pathname === '/portfolio' ? 'text-[#a78bfa]' : ''} orbitron border-nav`}>{lang === 'en' ? 'Portfolio' : 'Portfolio'}</li>
                   </Link>

                   <Link to='/plans'>
                   <li className={`${location.pathname === '/plans' ? 'text-[#a78bfa]' : ''} orbitron border-nav`}>{lang === 'en' ? 'Plans' : 'Planes'}</li>
                   </Link>
                   <Link to='/contact'>
                       <li className={`${location.pathname === '/contact' ? 'text-[#a78bfa]' : ''} orbitron border-nav`}>{lang === 'en' ? 'Contact' : 'Contacto'}</li>
                   </Link>

                
               </ul>
           </nav>
        </div>
       
       </div>
       <div className="relative flex">
      <div className="flex absolute border rounded-2xl px-1 border-gray-50 m-1 -right-2 top-4 md:-top-4 underline text-slate-50 justify-end items-center">
        <button
          className={`cursor-pointer ${lang === "en" ? "text-[#a78bfa]" : ""}`}
          onClick={() => setLanguage("en")}
        >
          en
        </button>
        /
        <button
          className={`cursor-pointer ${lang === "es" ? "text-[#a78bfa]" : ""}`}
          onClick={() => setLanguage("es")}
        >
          es
        </button>
      </div>
    </div>

        </header>
    )
}

export default Nav