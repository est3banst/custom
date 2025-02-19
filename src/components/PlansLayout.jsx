import React from 'react'
import Nav from './Nav'
import Plans from './Plans'
import Footer from './Footer'

const PlansLayout = () => {
  return (
    <>
    <div className='grid grid-cols-1 justify-evenly'>
        <Nav/>
       <div className='pt-[120px]'>
       <Plans/>
       </div>
        <Footer/>
    </div>
    </>
  )
}

export default PlansLayout