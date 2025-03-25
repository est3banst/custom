import React from 'react'
import ServicesEn from './ServicesEn'
import HeroEn from './HeroEn'
import AboutEn from './AboutEn'
import { useInView } from "react-intersection-observer";
import FooterEn from './FooterEn';
import NavEn from './NavEn';
import Charts from '../Charts';
import TwistedGallery from '../TwistedGallery';

const MainEn = () => {

  const { ref, inView } = useInView({
   triggerOnce: false,
   threshold : 0.3

  });

  return (
    <>
    <NavEn/>
    <div className='overflow-x-hidden grid grid-cols-1 gap-4'>
    <div
        ref={ref}
        className={`transform transition-all duration-600 ease-out 
          ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[-5%] opacity-0'}`}
      >
    <HeroEn />
    </div>
    <div className='grid grid-cols-1 custom-spacing-pc gap-8 mb-12 lg:gap-15'>
    <TwistedGallery
    lang='en'
    />
    <ServicesEn />
    
    <Charts
    lang='en'
    />
    <AboutEn />
    </div>
    <FooterEn />
    </div>
    </>
  )
}

export default MainEn