import React from 'react'
import MenuEn from './MenuEn'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();
    return (
        <header className='z-[90] pt-4 px-4 flex fixed gap-4 top-0 left-0 justify-between w-full'>

       <div className='flex relative justify-between w-full items-center'>
        <section className='absolute top-0'>
       <Link to='/en'>
        <img 
        src="/klog.png"
        className='relative h-[95px]' alt="Kustom logo" />
       </Link> 
           <div className=''>
           <MenuEn  />
           </div>
       
        </section>
       
        <div className='hidden md:block w-full'>
        <nav className='hidden md:flex md:w-full px-6'>
               <ul className='flex w-full justify-end gap-3 p-2'>
                  <Link to="/en/services">
                     <li className='orbitron border-nav'>Services</li>
                    </Link>
                
                   <Link to="/en/portfolio">
                   <li className='orbitron border-nav'>Portfolio</li>
                   </Link>

                   <Link to="/en/plans">
                   <li className='orbitron border-nav'>Plans</li>
                   </Link>
                   <Link to="/en/contact">
                       <li className='orbitron border-nav'>Contact</li>
                   </Link>

                
               </ul>
           </nav>
        </div>
       
       </div>
       <div className='relative flex'>
       <div className='flex absolute border rounded-xs border-gray-50 m-1 -right-2 top-2 underline text-slate-50 justify-end items-center'>
            <Link className={`${location.pathname.includes('/en') ? 'text-[#a78bfa]' : ''}`} to="/en/">en</Link>/
            <Link className={`${location.pathname.includes('/en') === false ? 'text-[#a78bfa]' : ''}`} to="/">es</Link>
        </div>
       </div>

        </header>
    )
}

export default Nav