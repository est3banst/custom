import React from 'react'
import '../assets/Menu.css'
import { Link ,useLocation} from 'react-router-dom'
import { useLanguage } from '../config/LanguageContext';

const Menu = () => {
    const year = new Date();
    const location = useLocation();
    const {lang} = useLanguage();
  return (
    <div className='flex md:hidden'>
        <nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" id="menuCheckbox" />
    
  
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu" className='supp-bg orbitron'>
   
      <li>
        <Link to="/">
          <label className={location.pathname === '/' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">{lang === 'en' ? 'Home' : 'Inicio'}</label>
        </Link>
      </li>
      
      <li>
      <Link to="/services">
      <label className={location.pathname.includes('/services') ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">{ lang === 'en' ? 'Services' : 'Servicios'}</label>
      </Link>
        </li>
        <li>
      <Link to="/portfolio">
      <label className={location.pathname.includes('/portfolio') ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Portfolio</label>
      </Link>
        </li>
        <li>
      <Link to="/plans">
      <label className={location.pathname === '/plans' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">{lang === 'en' ? 'Plans' : 'Planes'}</label>
      </Link>
        </li>
        <li>
      <Link to="/contact">
      <label className={location.pathname === '/contact' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">{lang === 'en' ? 'Contact' : 'Contacto'}</label>
        </Link>
        
        </li>
      
        <section className='my-12 relative flex gap-1 flex-col w-full'>
    <p className='border-b border-slate-50 w-max'>Kustom &copy; {year.getFullYear()}</p>
    <small>{lang === 'en' ? 'Web development at your reach' : "Desarrollo web a tu alcance"} </small>
</section>
    </ul>
   
  </div>
  
</nav>


        </div>
  )
}

export default Menu