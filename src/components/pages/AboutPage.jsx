import React from 'react'
import Nav from '../Nav'
import Us from '../Us'
import Footer from '../Footer'
import { useEffect } from 'react'

const AboutPage = () => {
    useEffect(() => {
        scrollTo(0, 0)
    }, []);
  return (
    <>
    <div className='flex flex-col relative h-screen bg-[#171717]'>
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