import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className='z-[90] pt-4 px-4 flex fixed top-0 left-0 justify-between w-full'>

       <div className='flex justify-between w-full items-center'>
        <section className='absolute top-0'>
       <Link to='/'>
        <img 
        src="/klog.png"
        className='relative h-[95px]' alt="Kustom logo" />
       </Link> 
           <Menu  />

        </section>
        <div className='hidden md:block w-full'>
        <nav className='hidden md:flex md:w-full'>
               <ul className='flex w-full justify-end gap-3 p-2'>
                  <Link to="/services">
                     <li className='orbitron border-nav'>Servicios</li>
                    </Link>
                
                   <Link to="/portfolio">
                   <li className='orbitron border-nav'>Portfolio</li>
                   </Link>

                   <Link to="/plans">
                   <li className='orbitron border-nav'>Planes</li>
                   </Link>
                   <Link to="/contact">
                       <li className='orbitron border-nav'>Contacto</li>
                   </Link>

                
               </ul>
           </nav>
        </div>
           
       </div>

        </header>
    )
}

export default Nav