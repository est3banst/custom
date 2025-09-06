import AccordionComp from '../blueprints/AccordionComp'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../config/LanguageContext'

const Plans = () => {
  const [activePremium, setActivePremium] = useState(null);
  const {lang} = useLanguage();
  const pathRef = useRef(null);

  const { ref: ref2 , inView: inView2 } = useInView({
    threshold: 0.1
  })

  const handleTogglePremium = (id) => {
    setActivePremium(activePremium === id ? null : id);
  };


useEffect(() => {
  if (inView2 && pathRef.current) {
    const length = pathRef.current.getTotalLength();

    pathRef.current.style.strokeDasharray = `${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;

    requestAnimationFrame(() => {
      pathRef.current.style.transition = "stroke-dashoffset 2.5s ease-in-out";
      pathRef.current.style.strokeDashoffset = "0";
    });
  }
}, [inView2]);

const steps = [
  {
    num: '01',
    step: lang === 'en' ? 'Analysis' : 'Análisis',
    info: lang === 'en' ? 'We will conduct an extensive analysis of your business to find or define its essence and how it makes it unique in the market. The emphasis will be on the user experience' : 'Haremos un análisis extenso sobre tu negocio, para encontrar o definir su esencia y como esta lo hace único en el mercado. El énfasis será la experiencia de usuario'
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
    info: lang === 'en' ? 'We launch the solution. We monitor it for the first 3 months post-production, ensuring maximum efficiency' : 'Lanzamos la solución .Realizamos monitoreos por los primeros 3 meses de la puesta en producción garantizando la máxima eficiencia'
  },
 
]

  return (
    <>
    <div className='p-4'>
       <section ref={ref2} className={`${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} border-t-2 transition-all duration-500 ease-in border-amber-50 my-4`}>
          
           <svg
    className="absolute left-0 top-0 w-full h-[150dvh] md:h-[120dvh] pointer-events-none"
    viewBox="0 0 100 600"
    preserveAspectRatio="none"
  >
    <path
      d="M50 0 C 80 20, 20 300, 20 250 S 100 500, 50 700"
      stroke="#a78bfa"
      strokeWidth="2"
      fill="none"
      ref={pathRef}
    />
  </svg>
          <div className='relative z-50'>

          <h2 className='border-b w-max text-2xl font-black my-6 border-slate-50'>
            {lang === 'en' ? 'Process:' : 'Proceso:'}
          </h2>
          <p className='my-2 text-gray-300'>{lang === 'en' ? 'We are passionate about what we do, and it shows. For businesses with very specific requirements, the digital identity of your brand will leave a lasting impression on your customers' : 'Somos apasionados por lo que hacemos y se nota. Para negocios con requerimientos muy especifícos, la identidad digital de tu marca tus clientes no la van a olvidar'}
          </p>
    <div className='flex flex-col w-full gap-4'>
    <section className='flex flex-col p-4'>
        {
          steps.map((pstep, index) => (
            <div key={index} className='bg-[#242424]'>

               <AccordionComp 
            que={pstep.step}
            answ={pstep.info}
            num={pstep.num}
            active={activePremium}
            idn={index+1}
            clasname={'uppercase text-base p-1'}
            secclass={'border-t border-slate-50 mt-2'}
            handleToggle={handleTogglePremium}
            />
            </div>
           
          ))
        }
       </section>
    </div>
          <div className='mx-auto py-4 px-2 w-max'>
          <h2 className='text-xl'>{lang === 'en' ? 'Performance' : 'Métricas de'} <b>{lang === 'en' ? 'metrics' : "rendimiento"}</b></h2>
          <div className='flex flex-col md:flex-row gap-4 m-4'>
  <div className='max-w-56 p-3 bg-[#42424222] backdrop-blur-sm'>
    <span className='font-black text-2xl'>1S</span>
    <p className='text-sm'>
    {lang === 'en' ? 'Average load speed' : "Promedio velocidad de carga"}
      </p>
      <p className='text-xs uppercase'>{lang === 'en' ? 'source: Google Pagespeed' : 'fuente: Google Pagespeed'}</p>
    </div>
    <div className='max-w-56 p-3 bg-[#42424222] backdrop-blur-sm'>
      <span className='font-black text-2xl'>99.9%</span>
      <p className='text-sm'>{lang === 'en' ? 'Availability Guarantee' : 'Garantía de Disponibilidad'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Cloud infrastructure' : 'fuente: Infraestructura en la nube'}</p>
    </div>

    <div className='max-w-56 p-3 bg-[#42424222] backdrop-blur-sm'> 
      <span className='font-black text-2xl'>88%</span>
      <p className='text-sm'>{ lang === 'en' ? 'Increase in conversions' : 'Incremento de conversiones'}</p>
      <p className='text-xs uppercase'>{ lang === 'en' ? 'source: Client Analytics ' : 'fuente: Client Analytics'}</p>
    </div>
  </div>
    </div>
          </div>
        </section>
    </div>
  
    </>
  )
}

export default Plans
