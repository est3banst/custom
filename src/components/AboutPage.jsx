import React from 'react'
import Nav from './Nav'
import Us from './Us'

const AboutPage = () => {
  return (
    <>
    <div className='flex relative h-screen bg-[#171717]'>
        <Nav />
        <div className='pt-[120px] px-4'>

        <Us />
        </div>
    </div>
    </>
  )
}

export default AboutPage