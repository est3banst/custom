import React from 'react'
import AccordionComp from './AccordionComp'
import { useState } from 'react'

const Plans = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [activePremium, setActivePremium] = useState(null);

  const handleToggleStandard = (id) => {
    setActiveStandard(activeStandard === id ? null : id);
  };

  const handleTogglePremium = (id) => {
    setActivePremium(activePremium === id ? null : id);
  };

  return (
    <>
    <div className='p-4'>
        <h2 className='border-b text-2xl font-black border-slate-50 w-max my-4'>Planes</h2>
        <h2>Todos nuestros servicios tienen las mismas dos modalidades, <b className='text-[#a78bfa]'>Standard</b> o <b className='text-[#a78bfa]'>Premium</b></h2>
   
        <section className='border-t-2 border-amber-50 my-4'>
  <h2 className='border-b w-max font-bold text-xl border-slate-50 mt-4'>
    Plan Standard
    </h2>
    <p className='my-2'>El plan ideal para pequeños negocios o particulares que ofrecen sus servicios y quieren comenzar a construir su marca digital</p>
    <p className='text-base w-max font-bold my-2'>Proceso:</p>
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
   <h2>Métricas de <b>rendimiento</b></h2>
  <div className='flex flex-col md:flex-row gap-4 m-4'>
  <div className='max-w-56 p-3'>
    <span className='font-black text-2xl'>1.6S</span>
    <p className='text-sm'>
      Promedio velocidad de carga
      </p>
      <p className='text-xs uppercase'>fuente: Google Pagespeed</p>
    </div>
    <div className='max-w-56 p-3'>
      <span className='font-black text-2xl'>99.9%</span>
      <p className='text-sm'>Garantía de Disponibilidad</p>
      <p className='text-xs uppercase'>fuente: Infraestructura en la nube</p>
    </div>

    <div className='max-w-56 p-3'> 
      <span className='font-black text-2xl'>75%</span>
      <p className='text-sm'>Incremento de conversiones</p>
      <p className='text-xs uppercase'>fuente: Client Analytics</p>
    </div>
  </div>
    </div>
        </section>
        <section className='border-t-2 border-amber-50 my-4'>
          <h2 className='border-b w-max text-xl font-bold border-slate-50 mt-4'>
            Plan Premium
          </h2>
          <p className='my-2'>Somos apasionados por lo que hacemos y se nota. Para negocios con requerimientos muy especifícos, la identidad digital de tu marca tus clientes no la van a olvidar
          </p>
          <p className='text-base w-max font-bold my-2'>Proceso:</p>
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
   <h2>Métricas de <b>rendimiento</b></h2>
  <div className='flex flex-col md:flex-row gap-4 m-4'>
  <div className='max-w-56 p-3'>
    <span className='font-black text-2xl'>1S</span>
    <p className='text-sm'>
      Promedio velocidad de carga
      </p>
      <p className='text-xs uppercase'>fuente: Google Pagespeed</p>
    </div>
    <div className='max-w-56 p-3'>
      <span className='font-black text-2xl'>99.9%</span>
      <p className='text-sm'>Garantía de Disponibilidad</p>
      <p className='text-xs uppercase'>fuente: Infraestructura en la nube</p>
    </div>

    <div className='max-w-56 p-3'> 
      <span className='font-black text-2xl'>88%</span>
      <p className='text-sm'>Incremento de conversiones</p>
      <p className='text-xs uppercase'>fuente: Client Analytics</p>
    </div>
  </div>
    </div>
        </section>
    </div>
    </>
  )
}

export default Plans

const standardSteps = [
  {
    num: '01',
    step: 'Análisis',
    info: "Haremos un análisis exhaustivo de las metas y necesidades de tu negocio, audiencia objetivo y requerimientos técnicos para alinear nuestro servicio a tus necesidades"
  },
  {
    num: '02',
    step: 'Planeamiento',
    info: 'Diseñaremos prototipos detallados, arquitectura técnica y cronogramas de trabajo para asegurar la efectividad del proceso'
  },
  {
    num: '03',
    step: 'Desarrollo',
    info: 'Implementamos tu vision utilizando las más modernas tecnologías y mejores prácticas para entregar la solución adecuada'
  },
  {
    num: '04',
    step: 'Pruebas',
    info: 'Realizamos pruebas y estudios de calidad en diferentes dispositivos para garantizar una solución eficiente y confíable'
  },
  {
    num: '05',
    step: 'Producción',
    info: 'Lanzamos la solución, realizando monitoreos periódicos y garantizamos el soporte. Nos aseguramos que la solución cumple con los objetivos de negocio'
  },
 
]
const premiumSteps = [
  {
    num: '01',
    step: 'Análisis',
    info: 'Haremos un análisis extenso sobre tu negocio, para encontrar o definir su esencia y como está lo hace único en el mercado. El énfasis será la experiencia de usuario'
  },
  {
    num: '02',
    step: 'Planeamiento',
    info: 'Definiremos los procesos a realizar, basados en las últimas tendencias para aumentar el ROI y potenciar tu negocio desde el primer segundo'
  },
  {
    num: '03',
    step: 'Desarrollo',
    info: 'Implementamos los procesos definidos en el paso anterior, trabajando con las últimas tecnologías de desarrollo web para crear una experiencia digital única'
  },
  {
    num: '04',
    step: 'Pruebas',
    info: 'Haremos pruebas extensivas en varios dispositivos, estudios de calidad y análisis para mejorar la experiencia de usuario para garantizar una solución perfecta'
  },
  {
    num: '05',
    step: 'Refinado',
    info: 'Realizaremos un analisis de una primera versión de la solución asegurando que cumpla con los estandares más altos, estudios de rendimiento, estudios de ux, perfeccionamiento del contenido y más'
  },
  {
    num: '06',
    step: 'Producción',
    info: 'Lanzamos la solución'
  },
 
]