import React from 'react'
import AccordionComp from '../AccordionComp'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const PlansEn = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [activePremium, setActivePremium] = useState(null);
  const { ref: ref1 , inView: inView1 } = useInView({})

  const { ref: ref2 , inView: inView2 } = useInView({
    threshold: 0.1
  })

  const handleToggleStandard = (id) => {
    setActiveStandard(activeStandard === id ? null : id);
  };

  const handleTogglePremium = (id) => {
    setActivePremium(activePremium === id ? null : id);
  };

  return (
    <>
    <div className='p-4'>
    <h2 className='border-b text-2xl font-black border-slate-50 w-max my-4'>Plans</h2>
<h2>All of our services come in two modes: <b className='text-[#a78bfa]'>Standard</b> or <b className='text-[#a78bfa]'>Premium</b></h2>

<section ref={ref1} className={`${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} border-t-2 transition-all py-12 duration-500 ease-in border-amber-50 my-4`}>
  <h2 className='border-b w-max font-bold text-xl border-slate-50 mt-4'>
    Standard Plan
  </h2>
  <p className='my-2'>The ideal plan for small businesses or individuals offering their services and looking to start building their digital brand.</p>
  <p className='text-base w-max font-bold my-2'>Process:</p>
  <div className='flex flex-col m-2 px-2 leading-relaxed w-full gap-4'>
    <section className='flex flex-col p-4'>
      {
        standardSteps.map((step, index) => (
          <AccordionComp 
            que={step.step}
            answ={step.info}
            num={step.num}
            active={activeStandard}
            idn={index+1}
            clasname={'uppercase text-base p-1'}
            secclass={'border-t border-slate-50 mt-2'}
            key={index}
            handleToggle={handleToggleStandard}
          />
        ))
      }
    </section>
  </div>
  <div className='mx-auto py-4 px-2 w-max'>
    <h2 className='text-xl'>Performance <b>Metrics</b></h2>
    <div className='flex flex-col md:flex-row gap-4 m-4'>
      <div className='max-w-56 p-3'>
        <span className='font-black text-2xl'>1.6S</span>
        <p className='text-sm'>
          Average load speed
        </p>
        <p className='text-xs uppercase'>source: Google Pagespeed</p>
      </div>
      <div className='max-w-56 p-3'>
        <span className='font-black text-2xl'>99.9%</span>
        <p className='text-sm'>Availability Guarantee</p>
        <p className='text-xs uppercase'>source: Cloud Infrastructure</p>
      </div>

      <div className='max-w-56 p-3'> 
        <span className='font-black text-2xl'>75%</span>
        <p className='text-sm'>Increase in conversions</p>
        <p className='text-xs uppercase'>source: Client Analytics</p>
      </div>
    </div>
  </div>
</section>

        <section ref={ref2} className={`${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} py-12 border-t-2 transition-all duration-500 ease-in border-amber-50 my-4`}>
  <h2 className='border-b w-max text-xl font-bold border-slate-50 mt-4'>
    Premium Plan
  </h2>
  <p className='my-2'>We are passionate about what we do, and it shows. For businesses with very specific requirements, the digital identity of your brand will leave a lasting impression on your customers.</p>
  <p className='text-base w-max font-bold my-2'>Process:</p>
  <div className='flex flex-col w-full gap-4'>
    <section className='flex flex-col p-4'>
      {
        premiumSteps.map((pstep, index) => (
          <AccordionComp
            que={pstep.step}
            answ={pstep.info}
            num={pstep.num}
            active={activePremium}
            idn={index+1}
            clasname={'uppercase text-base p-1'}
            secclass={'border-t border-slate-50 mt-2'}
            key={index}
            handleToggle={handleTogglePremium}
          />
        ))
      }
    </section>
  </div>
  <div className='mx-auto py-4 px-2 w-max'>
    <h2 className='text-xl'>Performance <b>Metrics</b></h2>
    <div className='flex flex-col md:flex-row gap-4 m-4'>
      <div className='max-w-56 p-3'>
        <span className='font-black text-2xl'>1S</span>
        <p className='text-sm'>Average load speed</p>
        <p className='text-xs uppercase'>source: Google Pagespeed</p>
      </div>
      <div className='max-w-56 p-3'>
        <span className='font-black text-2xl'>99.9%</span>
        <p className='text-sm'>Availability Guarantee</p>
        <p className='text-xs uppercase'>source: Cloud Infrastructure</p>
      </div>

      <div className='max-w-56 p-3'>
        <span className='font-black text-2xl'>88%</span>
        <p className='text-sm'>Increase in conversions</p>
        <p className='text-xs uppercase'>source: Client Analytics</p>
      </div>
    </div>
  </div>
</section>
 </div>
    </>
  )
}

export default PlansEn;

const standardSteps = [
    {
      num: '01',
      step: 'Analysis',
      info: "We will conduct a thorough analysis of your business goals, target audience, and technical requirements to align our service with your needs."
    },
    {
      num: '02',
      step: 'Planning',
      info: 'We will design detailed prototypes, technical architecture, and work schedules to ensure the effectiveness of the process.'
    },
    {
      num: '03',
      step: 'Development',
      info: 'We implement your vision using the latest technologies and best practices to deliver the right solution.'
    },
    {
      num: '04',
      step: 'Testing',
      info: 'We perform quality tests and studies on different devices to ensure an efficient and reliable solution.'
    },
    {
      num: '05',
      step: 'Production',
      info: 'We launch the solution, conduct periodic monitoring, and provide support. We ensure the solution meets business objectives.'
    },
  ];
  
  const premiumSteps = [
    {
      num: '01',
      step: 'Analysis',
      info: 'We will conduct an extensive analysis of your business to find or define its essence and how it makes it unique in the market. The emphasis will be on the user experience.'
    },
    {
      num: '02',
      step: 'Planning',
      info: 'We will define the processes to be carried out, based on the latest trends to increase ROI and boost your business from the first second.'
    },
    {
      num: '03',
      step: 'Development',
      info: 'We implement the processes defined in the previous step, working with the latest web development technologies to create a unique digital experience.'
    },
    {
      num: '04',
      step: 'Testing',
      info: 'We will conduct extensive tests on various devices, quality studies, and analysis to improve the user experience and ensure a perfect solution.'
    },
    {
      num: '05',
      step: 'Refinement',
      info: 'We will analyze the first version of the solution to ensure it meets the highest standards, performance studies, UX studies, content refinement, and more.'
    },
    {
      num: '06',
      step: 'Production',
      info: 'We launch the solution. We monitor it for the first 3 months post-production, ensuring maximum efficiency.'
    },
  ];
  