import React from 'react'
import Nav from '../Nav'
import SectionManagment from './SectionManagment'
import { useEffect } from 'react'
import Footer from '../Footer'

const LayoutMs = () => {
    useEffect(() => {
        scrollTo(0, 0)
    }, [])
  return (
    <>
    <div className='container max-w-full'>
       
       <Nav />
     
       <div>
       <SectionManagment />
     
     <div className='bg-[#00000020] relative z-20 backdrop-blur-xs'>
     <Footer/>
     </div>
       </div>
    </div>
    </>
  )
}

export default LayoutMs