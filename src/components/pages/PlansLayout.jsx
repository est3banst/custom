import React from 'react'
import Nav from '../Nav'
import Plans from '../Plans'
import Footer from '../Footer'

import useScrollTop from '../hooks/useScrollTop'

const PlansLayout = () => {
  useScrollTop()
  return (
    <>
    <div className='grid grid-cols-1 justify-evenly'>
        <Nav/>
       <div className='pt-[96px]'>
       <Plans/>
       </div>
        <Footer/>
    </div>
    </>
  )
}

export default PlansLayout