import React from 'react'
import { Link } from 'react-router-dom'
import Lighting from '../Lighting'
import { useInView } from 'react-intersection-observer'

const Us = () => {
  const { ref: ref1 , inView: inView1 } = useInView({
    threshold: 0.1
  })
  const { ref: ref2 , inView: inView2 } = useInView({
    threshold: 0.1
  })
    return (
        <>
        <Lighting>
        <div className='flex font-bold flex-col w-full md:w-5/6 justify-center m-auto relative h-auto gap-4'>
      <div ref={ref1} className={`bg-[#17171702] backdrop-blur-2xl transition-all duration-500 ease-in gap-4 py-12 flex w-full p-4 flex-col ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
  <div className="flex items-start gap-2">
    <span className="w-[8px] shrink-0 h-[8px] bg-[#a78bfa] rounded-full mt-2"></span>
    <p className='leading-relaxed'>
    We design and develop modern, scalable, and high-performance websites tailored to your needs
    </p>
  </div>
  <div className="flex items-start gap-2">
    <span className="w-[8px] shrink-0 h-[8px] bg-[#a78bfa] rounded-full mt-2"></span>
    <p className='leading-relaxed'>
    Specializing in websites that convert visitors into customers
    </p>
  </div>
  <div className="flex items-start gap-2">
    <span className="w-[8px] shrink-0 h-[8px] bg-[#a78bfa] rounded-full mt-2"></span>
    <p className='leading-relaxed'>
      
Elevate your digital presence with sophisticated interactions and a unique brand identity
    </p>
  </div>
</div>

          <div ref={ref2} className={`bg-[#1d1d1db5] rounded-br-2xl rounded-tl-2xl backdrop-blur-xs text-xl flex transition-all duration-500 ease-in flex-col gap-3 py-8 px-4 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
            <p>Everyone does an online search before hiring a service or paying for a product. If you're not there, you're likely to lose that potential customer</p>
            <p>You take care of your business while we build your digital brand</p>
            
            </div>
            <p className='text-2xl text-center self-center w-max border-b-2 border-[#a78bfa] font-semibold'>
               The wait is over
            </p>
            <section className='flex p-3 items-center justify-center'>
                <Link to="/contact">
                <button className="action">Get in touch</button>
                </Link>
            </section>
        </div>
        </Lighting>
        
        </>
    )
}

export default Us