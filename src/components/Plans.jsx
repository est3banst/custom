import React from 'react'
import AccordionComp from './blueprints/AccordionComp'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../config/LanguageContext'

const Plans = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [activePremium, setActivePremium] = useState(null);
  const { ref: ref1 , inView: inView1 } = useInView({})
  const {lang} = useLanguage();

  const { ref: ref2 , inView: inView2 } = useInView({
    threshold: 0.1
  })

  const handleToggleStandard = (id) => {
    setActiveStandard(activeStandard === id ? null : id);
  };

  const handleTogglePremium = (id) => {
    setActivePremium(activePremium === id ? null : id);
  };


const standardSteps = [
  {
    num: '01',
    step: lang === 'en' ? 'Analysis' : 'Análisis',
    info: lang === 'en' ? "We will conduct a thorough analysis of your business goals, target audience, and technical requirements to align our service with your needs." : "Haremos un análisis exhaustivo de las metas y necesidades de tu negocio, audiencia objetivo y requerimientos técnicos para alinear nuestro servicio a tus necesidades"
  },
  {
    num: '02',
    step: lang === 'en' ? 'Planning' : 'Planeamiento',
    info: lang === 'en' ? 'We will design detailed prototypes, technical architecture, and work schedules to ensure the effectiveness of the process' : 'Diseñaremos prototipos detallados, arquitectura técnica y cronogramas de trabajo para asegurar la efectividad del proceso'
  },
  {
    num: '03',
    step: lang === 'en' ? 'Development' : 'Desarrollo',
    info: lang === 'en' ? 'We implement your vision using the latest technologies and best practices to deliver the right solution' : 'Implementamos tu vision utilizando las más modernas tecnologías y mejores prácticas para entregar la solución adecuada'
  },
  {
    num: '04',
    step: lang === 'en' ? 'Testing' : 'Pruebas',
    info: lang === 'en' ? 'We perform quality tests and studies on different devices to ensure an efficient and reliable solution' : 'Realizamos pruebas y estudios de calidad en diferentes dispositivos para garantizar una solución eficiente y confíable'
  },
  {
    num: '05',
    step: lang === 'en' ? 'Production' : 'Producción',
    info: lang === 'en' ? 'We launch the solution, conduct periodic monitoring, and provide support. We ensure the solution meets business objectives' : 'Lanzamos la solución, realizando monitoreos periódicos y garantizamos el soporte. Nos aseguramos que la solución cumple con los objetivos de negocio'
  },
 
]
const premiumSteps = [
  {
    num: '01',
    step: lang === 'en' ? 'Analysis' : 'Análisis',
    info: lang === 'en' ? 'We will conduct an extensive analysis of your business to find or define its essence and how it makes it unique in the market. The emphasis will be on the user experience' : 'Haremos un análisis extenso sobre tu negocio, para encontrar o definir su esencia y como está lo hace único en el mercado. El énfasis será la experiencia de usuario'
  },
  {
    num: '02',
    step: lang === 'en' ? 'Planning' : 'Planeamiento',
    info: lang === 'en' ? 'We will define the processes to be carried out, based on the latest trends to increase ROI and boost your business from the first second' : 'Definiremos los procesos a realizar, basados en las últimas tendencias para aumentar el ROI y potenciar tu negocio desde el primer segundo'
  },
  {
    num: '03',
    step: lang === 'en' ? 'Development' : 'Desarrollo',
    info: lang === 'en' ? 'We implement the processes defined in the previous step, working with the latest web development technologies to create a unique digital experience' : 'Implementamos los procesos definidos en el paso anterior, trabajando con las últimas tecnologías de desarrollo web para crear una experiencia digital única'
  },
  {
    num: '04',
    step: lang === 'en' ? 'Testing' : 'Pruebas',
    info: lang === 'en' ? 'We will conduct extensive tests on various devices, quality studies, and analysis to improve the user experience and ensure a perfect solution' : 'Haremos pruebas extensivas en varios dispositivos, estudios de calidad y análisis para mejorar la experiencia de usuario para garantizar una solución perfecta'
  },
  {
    num: '05',
    step: lang === 'en' ? 'Refinement' : 'Refinado',
    info: lang === 'en' ? 'We will analyze the first version of the solution to ensure it meets the highest standards, performance studies, UX studies, content refinement, and more' : 'Realizaremos un analisis de una primera versión de la solución asegurando que cumpla con los estandares más altos, estudios de rendimiento, estudios de ux, perfeccionamiento del contenido y más'
  },
  {
    num: '06',
    step: lang === 'en' ? 'Production' : 'Producción',
    info: lang === 'en' ? 'We launch the solution. We monitor it for the first 3 months post-production, ensuring maximum efficiency' : 'Lanzamos la solución .Realizamos monitoreos por los primeros 3 meses de la puesta en producción realizando garantizando la máxima eficiencia'
  },
 
]

  return (
    <>
    <div className='p-4'>
      
        <h2 className='border-b text-2xl font-black border-slate-50 w-max my-4'>{lang === 'en' ? 'Plans' : 'Planes'}</h2>
        <h2>{lang === 'en' ? 'All of our services come in two modes:' : 'Todos nuestros servicios tienen las mismas dos modalidades: '} <b className='text-[#a78bfa]'>Standard</b> {lang === 'en' ? 'or' : 'o'} <b className='text-[#a78bfa]'>Premium</b></h2>
   
        <section ref={ref1} className={`${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} border-t-2 transition-all py-12 duration-500 ease-in border-amber-50 my-4`}>
  <h2 className='border-b w-max font-bold text-xl border-slate-50 mt-4'>
    {lang === 'en' ? 'Standard Plan' : 'Plan Standard'}
    </h2>
    <p className='my-2 text-gray-300'>{lang === 'en' ? 'The ideal plan for small businesses or individuals offering their services and looking to start building their digital brand' : 'El plan ideal para pequeños negocios o particulares que ofrecen sus servicios y quieren comenzar a construir su marca digital'}</p>
    <p className='text-base w-max font-bold my-2'>{lang === 'en' ? 'Process: ' : 'Proceso:'}</p>
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
   <h2 className='text-xl'>{lang === 'en' ? 'Performance' : 'Métricas de'} <b>{lang === 'en' ? 'metrics' : "rendimiento"}</b></h2>
  <div className='flex flex-col md:flex-row gap-4 m-4'>
  <div className='max-w-56 p-3'>
    <span className='font-black text-2xl'>1.6S</span>
    <p className='text-sm'>
      {lang === 'en' ? 'Average load speed' : "Promedio velocidad de carga"}
      </p>
      <p className='text-xs uppercase'>{lang === 'en' ? 'source: Google Pagespeed' : 'fuente: Google Pagespeed'}</p>
    </div>
    <div className='max-w-56 p-3'>
      <span className='font-black text-2xl'>99.9%</span>
      <p className='text-sm'>{lang === 'en' ? 'Availability Guarantee' : 'Garantía de Disponibilidad'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Cloud infrastructure' : 'fuente: Infraestructura en la nube'}</p>
    </div>

    <div className='max-w-56 p-3'> 
      <span className='font-black text-2xl'>75%</span>
      <p className='text-sm'>{ lang === 'en' ? 'Increase in conversions' : 'Incremento de conversiones'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Client Analytics ' : 'fuente: Client Analytics'}</p>
    </div>
  </div>
    </div>
        </section>
        <section ref={ref2} className={`${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} py-12 border-t-2 transition-all duration-500 ease-in border-amber-50 my-4`}>
          <h2 className='border-b w-max text-xl font-bold border-slate-50 mt-4'>
            {lang === 'en' ? 'Premium Plan' : 'Plan Premium'}
          </h2>
          <p className='my-2 text-gray-300'>{lang === 'en' ? 'We are passionate about what we do, and it shows. For businesses with very specific requirements, the digital identity of your brand will leave a lasting impression on your customers' : 'Somos apasionados por lo que hacemos y se nota. Para negocios con requerimientos muy especifícos, la identidad digital de tu marca tus clientes no la van a olvidar'}
          </p>
          <p className='text-base w-max font-bold my-2'>{ lang === 'en' ? 'Process:' : 'Proceso:'}</p>
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
          <h2 className='text-xl'>{lang === 'en' ? 'Performance' : 'Métricas de'} <b>{lang === 'en' ? 'metrics' : "rendimiento"}</b></h2>
          <div className='flex flex-col md:flex-row gap-4 m-4'>
  <div className='max-w-56 p-3'>
    <span className='font-black text-2xl'>1S</span>
    <p className='text-sm'>
    {lang === 'en' ? 'Average load speed' : "Promedio velocidad de carga"}
      </p>
      <p className='text-xs uppercase'>{lang === 'en' ? 'source: Google Pagespeed' : 'fuente: Google Pagespeed'}</p>
    </div>
    <div className='max-w-56 p-3'>
      <span className='font-black text-2xl'>99.9%</span>
      <p className='text-sm'>{lang === 'en' ? 'Availability Guarantee' : 'Garantía de Disponibilidad'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Cloud infrastructure' : 'fuente: Infraestructura en la nube'}</p>
    </div>

    <div className='max-w-56 p-3'> 
      <span className='font-black text-2xl'>88%</span>
      <p className='text-sm'>{ lang === 'en' ? 'Increase in conversions' : 'Incremento de conversiones'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Client Analytics ' : 'fuente: Client Analytics'}</p>
    </div>
  </div>
    </div>
        </section>
    </div>
  
    </>
  )
}

export default Plans
