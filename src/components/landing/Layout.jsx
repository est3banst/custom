import React from 'react'
import Landings from './Landings'
import Nav from '../Nav'

const Layout = () => {
  return (
    <div className='h-screen bg-[#171717]'>
        <Nav/>
        <Landings />
    </div>
  )
}

export default Layout