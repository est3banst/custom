import React from 'react'
import Landings from './Landings'
import Nav from '../Nav'
import Section from './Section'

const Layout = () => {
  return (
    <div className='h-screen bg-[#171717]'>
        <Nav/>
        <Section />
        <Landings />
    </div>
  )
}

export default Layout