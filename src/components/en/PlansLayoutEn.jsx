import React from 'react'
import NavEn from './NavEn'
import PlansEn from './PlansEn'
import FooterEn from './FooterEn'

import useScrollTop from '../hooks/useScrollTop'

const PlansLayout = () => {
  useScrollTop()
  return (
    <>
    <div className='grid grid-cols-1 justify-evenly'>
        <NavEn />
       <div className='pt-[96px]'>
       <PlansEn />
       </div>
        <FooterEn />
    </div>
    </>
  )
}

export default PlansLayout