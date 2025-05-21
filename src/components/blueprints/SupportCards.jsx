import React from 'react'
import { useInView } from 'react-intersection-observer';

const SupportCards = ({ text }) => {

      const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
  return (
    <div className={`flex border card items-center gap-4 ${inView ? 'text-animation' : ''} transition-all duration-[620ms]`} ref={ref}>
    <svg className="w-6 h-6 shrink-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#ff3211" strokeLinecap="round" strokeWidth="2" d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
 <p>{text}</p>

    </div>
  )
}

export default SupportCards