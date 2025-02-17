import React from 'react'
import Menu from './Menu'

const Nav = () => {
    return (
        <header className='bg-[#171717] custom-nav-bg z-[50] p-4 flex fixed top-0 left-0 justify-between w-full'>

       <div className='flex justify-between w-full items-center'>
        <section className=''>
       <h1 className='text-2xl cust-font'>Custom</h1>
        <small>Soluciones web</small>       
           <Menu  />

        </section>
        <div className='hidden md:block'>
        <nav className='hidden md:flex'>
               <ul className='flex gap-3 p-2'>
                  <a href="">
                     <li className='border-nav'>Servicios</li>
                    </a>
                   <a href="">
                   <li className='border-nav'>Nosotros</li>

                   </a>
                   <a href="">
                   <li className='border-nav'>Contacto</li>

                   </a>
               </ul>
           </nav>
        </div>
           
       </div>

        </header>
    )
}

export default Nav