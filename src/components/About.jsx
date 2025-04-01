import React from 'react'
import { useInView } from "react-intersection-observer"
import MarqueeComp from './MarqueeComp'
import { Link } from 'react-router-dom'
import { useLanguage } from '../config/LanguageContext'

const About = () => {
    const {lang} = useLanguage();

    const { ref, inView } = useInView({
        threshold: 0.2
    })
 
    return (

        <>
        <div ref={ref} className={`load-bord custom-space lg:mt-20 transition-all duration-[320ms]
            ${
                inView ? 'startAnim' : 
                ''
            }`}></div>
          

            <div className={`relative h-auto text-xl py-4 flex flex-col transition-all duration-500 ease-in-out gap-3 mb-4 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className='heading-about uppercase'>{ lang === 'en' ? 'What we do' : 'Que hacemos'}</h2>

            <MarqueeComp />
                
            </div>
            <Link to='/about'
            className={`${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-max m-auto transition-all duration-500 ease-in rounded-full underline hover:bg-[#f0f0f0] hover:opacity-75 flex justify-center bg-[#f5f5f5] text-slate-900 p-6`}
            >{lang === 'en' ? 'About us' : 'Nosotros'}
            
            </Link>
        </>

    )
}

export default About