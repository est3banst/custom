import React from 'react'
import '../assets/Menu.css'
import { Link ,useLocation} from 'react-router-dom'

const Menu = () => {
    const year = new Date();
    const location = useLocation();
  return (
    <div className='flex md:hidden'>
        <nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" id="menuCheckbox" />
    
  
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu" className='orbitron'>
   
      <li>
        <Link to="/">
          <label className={location.pathname === '/' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Inicio</label>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <label className={location.pathname === '/about' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Nosotros</label>
        </Link>
      </li>
      
      <li>
      <Link to="/services">
      <label className={location.pathname.includes('/services') ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Servicios</label>
      </Link>
        </li>
        <li>
      <Link to="/plans">
      <label className={location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Planes</label>
      </Link>
        </li>
        <li>
      <Link to="/contact">
      <label className={location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Contacto</label>
        </Link>
        
        </li>
      
        <section className='my-12 relative flex gap-1 flex-col w-full'>
    <p className='border-b border-slate-50 w-max'>Kustom &copy; {year.getFullYear()}</p>
    <small>Soluciones web </small>
</section>
    </ul>
   
  </div>
  
</nav>


        </div>
  )
}

export default Menu