import React from 'react'
import '../assets/Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    const year = new Date();
  return (
    <div className='flex md:hidden'>
        <nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" id="menuCheckbox" />
    
  
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
   
      <li>
        <Link to="/">
          <label htmlFor="menuCheckbox">Inicio</label>
        </Link>
      </li>
      <li>
        <Link to="/nosotros">
          <label htmlFor="menuCheckbox">Nosotros</label>
        </Link>
      </li>
      
      <li>
      <Link to="/">
      <label htmlFor="menuCheckbox">Servicios</label>
      </Link>
        </li>
        <li>
      <Link to="/plans">
      <label htmlFor="menuCheckbox">Planes</label>
      </Link>
        </li>
        <li>
      <Link to="/">
      <label htmlFor="menuCheckbox">Contacto</label>
        </Link>
        
        </li>
      
        <section className='my-12 relative flex gap-1 flex-col w-full'>
    <p className='border-b border-slate-50 w-max'>Custom &copy; {year.getFullYear()}</p>
    <small>Soluciones web </small>
</section>
    </ul>
   
  </div>
  
</nav>


        </div>
  )
}

export default Menu