import React from 'react'
import Services from './Services'
import Hero from './Hero'
import About from './About'
import { useInView } from "react-intersection-observer";
import Footer from './Footer';

const Main = () => {

  const { ref, inView } = useInView({
   triggerOnce: false,
   threshold : 0.3

  });

  return (
    <>
    <div className='overflow-x-hidden grid grid-cols-1 gap-4'>
    <div
        ref={ref}
        className={`transform transition-all duration-600 ease-out 
          ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[-5%] opacity-0'}`}
      >
    <Hero />
    </div>
    <div className='grid grid-cols-1 custom-spacing-pc gap-8 mb-12 lg:gap-15'>
    <Services />
    <About />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Main