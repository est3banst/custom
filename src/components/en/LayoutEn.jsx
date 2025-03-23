import React from 'react'
import LandingsEn from './LandingsEn'
import NavEn from './NavEn'
import { Link } from 'react-router-dom'
import SectionEn from './SectionEn'
import FooterEn from './FooterEn'
import useScrollTop from '../hooks/useScrollTop'

const LayoutEn = () => {
    useScrollTop();
    
  return (
    <>
    <div className='min-h-screen grid grid-cols-1 relative bg-[#171717]'>
        <NavEn/>
        <SectionEn />
       <div className='md:flex relative md:gap-8'>
       <LandingsEn />
       <div className='block md:w-5/6 mt-5 px-2 pb-4'>
                        <div className='md:sticky md:top-30'>
                        <p className='p-2 text-base leading-relaxed md:text-xl'>
    In the digital age, not having a website is like not existing for thousands of potential customers. 
    Do you really want to miss opportunities just because your business isn't online?
</p>

                            <Link to="/portfolio">
                                <button className='action'>See portfolio</button>
                            </Link>
                        </div>
                    </div>
       </div>
       <div className=''>
       <FooterEn />
       </div>
    </div>
    
    </>
  )
}

export default LayoutEn