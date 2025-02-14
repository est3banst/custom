import React from 'react'
import '../assets/Menu.css'

const Menu = () => {
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
        <a href="#">
          <label htmlFor="menuCheckbox" onClick="this.parentNode.click();">Inicio</label>
        </a>
      </li>
      <li>
        <a href="#about">
          <label htmlFor="menuCheckbox" onClick="this.parentNode.click();">Nosotros</label>
        </a>
      </li>
      
      <li>
      <a>
      <label htmlFor="menuCheckbox">Servicios</label>
        </a>
        
        </li>
        <li>
      <a>
      <label htmlFor="menuCheckbox">Contacto</label>
        </a>
        
        </li>
      
    
    </ul>
  </div>
</nav>
        </div>
  )
}

export default Menu