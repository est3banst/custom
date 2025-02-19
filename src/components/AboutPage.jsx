import React from 'react'
import Nav from './Nav'
import Us from './Us'
import Footer from './Footer'

const AboutPage = () => {
  return (
    <>
    <div className='flex relative h-screen bg-[#171717]'>
        <Nav />
        <div className='pt-[120px] px-4'>

        <Us />
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default AboutPage