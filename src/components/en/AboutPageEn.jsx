import React from 'react'
import NavEn from './NavEn'
import UsEn from './UsEn'
import FooterEn from './FooterEn'

import useScrollTop from '../hooks/useScrollTop'

const AboutPage = () => {
    useScrollTop()
  return (
    <>
    <div className='flex flex-col relative h-screen bg-[#171717]'>
        <NavEn />
        <div className='pt-[100px] px-4'>

        <UsEn />
        </div>
        <FooterEn/>
    </div>
    </>
  )
}

export default AboutPage