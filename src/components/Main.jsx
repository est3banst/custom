import React from 'react'
import Services from './Services'
import Hero from './Hero'
import About from './About'
import { useInView } from "react-intersection-observer";

const Main = () => {

  const { ref, inView } = useInView({
   triggerOnce: false,
   threshold : 0.3

  });

  return (
    <>
    <div className='overflow-x-hidden'>
    <div
        ref={ref}
        className={`transform transition-all duration-600 ease-out 
          ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[-5%] opacity-0'}`}
      >
    <Hero />
    </div>
    <Services />
    <About />

    </div>
    </>
  )
}

export default Main