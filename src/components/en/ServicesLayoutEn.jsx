import React from 'react'
import Lighting from '../Lighting'
import AllServicesEn from './AllServicesEn'
import NavEn from './NavEn'
import FooterEn from './FooterEn'
import useScrollTop from '../hooks/useScrollTop'

const ServicesLayout = () => {
  useScrollTop();
  return (
    <>
    <div className='h-auto'>
        <NavEn />
    <div className=''>
        <Lighting>
        <AllServicesEn />

        </Lighting>
     </div>
        <FooterEn/>
    </div>
    </>
  )
}

export default ServicesLayout