import React from 'react'
import Lighting from './Lighting'
import AllServices from './AllServices'
import Nav from './Nav'
import Footer from './Footer'
import useScrollTop from './hooks/useScrollTop'

const ServicesLayout = () => {
  useScrollTop();
  return (
    <>
    <div className='h-auto'>
        <Nav />
    <div className=''>
        <Lighting>
        <AllServices />

        </Lighting>
     </div>
        <Footer/>
    </div>
    </>
  )
}

export default ServicesLayout