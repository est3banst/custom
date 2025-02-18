import React from 'react'
import { useInView } from "react-intersection-observer"
import MarqueeComp from './MarqueeComp'
import { Link } from 'react-router-dom'

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
          

            <div className='text-xl py-4 flex flex-col gap-3 mb-4'>
            <h2 className='heading-about uppercase'>Que hacemos</h2>

            <MarqueeComp />
                
            </div>
            <Link to='/nosotros'
            className='w-max m-auto rounded-full underline hover:bg-[#f0f0f0] hover:opacity-75 flex justify-center bg-[#f5f5f5] text-slate-900 p-6'
            >Nosotros
            
            </Link>
        </>

    )
}

export default About