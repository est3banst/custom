import React from 'react'
import Nav from '../Nav'
import AllServices from '../AllServices'
import Footer from '../Footer'

const ServicesPage = () => {
  return (
    <>
    <Nav />
    <div className='pt-[120px]'>
        <AllServices/>
    </div>
    <Footer />
    </>
  )
}

export default ServicesPage