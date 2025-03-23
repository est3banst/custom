import React from 'react'
import '../../assets/Menu.css'
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
        <Link to="/en">
          <label className={location.pathname === '/en' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Home</label>
        </Link>
      </li>
      
      <li>
      <Link to="/en/services">
      <label className={location.pathname.includes('/en/services') ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Services</label>
      </Link>
        </li>
        <li>
      <Link to="/en/portfolio">
      <label className={location.pathname.includes('/en/portfolio') ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Portfolio</label>
      </Link>
        </li>
        <li>
      <Link to="/en/plans">
      <label className={location.pathname === '/en/plans' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Plans</label>
      </Link>
        </li>
        <li>
      <Link to="/en/contact">
      <label className={location.pathname === '/en/contact' ? 'text-[#a78bfa] font-bold' : ''} htmlFor="menuCheckbox">Contact</label>
        </Link>
        
        </li>
      
        <section className='my-12 relative flex gap-1 flex-col w-full'>
    <p className='border-b border-slate-50 w-max'>Kustom &copy; {year.getFullYear()}</p>
    <small>Web solutions </small>
</section>
    </ul>
   
  </div>
  
</nav>


        </div>
  )
}

export default Menu