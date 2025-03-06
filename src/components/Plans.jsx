import React from 'react'

const Plans = () => {
  return (
    <>
    <div className='p-4'>
        <h2 className='border-b text-xl md:text-2xl font-black border-slate-50 w-max my-4'>Planes</h2>
        <h2>Todos nuestros servicios tienen las mismas dos modalidades, <b className='text-[#a78bfa]'>Standard</b> o <b className='text-[#a78bfa]'>Premium</b></h2>
   
        <section className='border-t-2 border-amber-50 my-4'>
  <h2 className='border-b w-max font-bold text-2xl border-slate-50 mt-4'>
    Plan Standard
    </h2>
    <p className='my-2'>El plan ideal para pequeños negocios o particulares que ofrecen sus servicios y quieren comenzar a construir su marca digital</p>
    <p className='text-xl md:text-2xl w-max font-bold my-2'>Proceso:</p>
    <div className='flex flex-col m-2 px-4 leading-relaxed w-full gap-4'>
      <section className='flex flex-col gap-4 border border-[#f2f2f2] rounded-e-2xl p-4'><article className='flex gap-4 border-b w-full text-xl md:text-2xl my-2 border-slate-100'><b>01</b><h2>Análisis</h2></article>
      <article>Haremos un análisis exhaustivo de las metas y necesidades de tu negocio, audiencia objetivo y requerimientos técnicos para alinear nuestro servicio con tus necesidades</article>
      </section>
      <section className='flex flex-col gap-4 border border-[#f2f2f2] rounded-e-2xl p-4'><article className='flex gap-4 border-b w-full text-xl md:text-2xl my-2 border-slate-100'><b>02</b><h2>Planeamiento</h2></article>
      <article>Diseñaremos prototipos detallados, arquitectura técnica y cronogramas de trabajo para asegurar la efectividad del proceso</article>
      </section>
      <section className='flex flex-col gap-4 border border-[#f2f2f2] rounded-e-2xl p-4'><article className='flex gap-4 border-b w-full text-xl md:text-2xl my-2 border-slate-100'><b>03</b><h2>Desarrollo</h2></article>
      <article>Implementamos tu vision utilizando las más modernas tecnologías y mejores prácticas para entregar la solución adecuada</article>
      </section>
      <section className='flex flex-col gap-4 border border-[#f2f2f2] rounded-e-2xl p-4'><article className='flex gap-4 border-b w-full text-xl md:text-2xl my-2 border-slate-100'><b>04</b><h2>Pruebas</h2></article>
      <article>Realizamos pruebas y estudios de calidad en diferentes dispositivos para garantizar una solución eficiente y confíable</article>
      </section>
      <section className='flex flex-col gap-4 border border-[#f2f2f2] rounded-e-2xl p-4'><article className='flex gap-4 border-b w-full text-xl md:text-2xl my-2 border-slate-100'><b>05</b><h2>Producción</h2></article>
      <article>Lanzamos la solución, realizando monitoreos periódicos y garantizamos el soporte. Nos aseguramos que la solución cumple con los objetivos de negocio</article>
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
          <h2 className='border-b w-max border-slate-50 mt-4'>
            Plan Premium
          </h2>
          <p>Somos apasionados por lo que hacemos y se nota. Para negocios con requerimientos muy especifícos, la identidad digital de tu marca tus clientes no la van a olvidar
          </p>
          <p className='border-b-[.5px] border-slate-50 mb-2 w-max'>Proceso:</p>
    <div className='flex flex-col w-full gap-4'>
      <section className='flex gap-4'><b>01</b><h2>Análisis</h2>
      <article></article>
      </section>
      <section className='flex gap-4'><b>02</b><h2>Planeamiento</h2>
      <article></article>
      </section>
      <section className='flex gap-4'><b>03</b><h2>Desarrollo</h2>
      <article></article>
      </section>
      <section className='flex gap-4'><b>04</b><h2>Pruebas</h2>
      <article></article>
      </section>
      <section className='flex gap-4'><b>05</b><h2>Refinado</h2>
      <article></article>
      </section>
      <section className='flex gap-4'><b>06</b><h2>Producción</h2>
      <article></article>
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