import React from 'react'
import Nav from '../Nav'
import Us from '../Us'
import Footer from '../Footer'

import useScrollTop from '../hooks/useScrollTop'

const AboutPage = () => {
    useScrollTop()
  return (
    <>
    <div className='flex flex-col relative h-screen bg-[#171717]'>
        <Nav />
        <div className='pt-[100px] px-4'>

        <Us />
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default AboutPage