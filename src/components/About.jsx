import React from 'react'
import { useInView } from "react-intersection-observer"
import MarqueeComp from './MarqueeComp'

const About = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    })
    return (

        <>
        <div ref={ref} className={`load-bord transition-all duration-[320ms]
            ${
                inView ? 'startAnim' : 
                ''
            }`}></div>
          

            <div className='text-xl p-4 flex flex-col gap-3'>
            <h2 className='heading-about uppercase'>Que hacemos</h2>

            <MarqueeComp />
                
            </div>
            
        </>

    )
}

export default About