import React from 'react'
import {
    useInView
} from 'react-intersection-observer'

const SmallCard = ({ svg, text }) => {

    const { ref, inView } = useInView({ 
        threshold: 0.1,
        triggerOnce: true });
  return (
    <div ref={ref} className={`opacity-0 -translate-y-15 -rotate-3 transition-all duration-500 ease-in-out h-auto backdrop-blur-md bg-[#14141499] p-8 md:p-6 rounded-xs w-full ${inView ? 'opacity-100 translate-y-0 rotate-0' : ''}`}>
    {svg}
    <p className='p-2 font-bold' >
        {text}

    </p>
    </div>
  )
}

export default SmallCard