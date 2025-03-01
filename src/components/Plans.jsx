import React from 'react'

const Plans = () => {
  return (
    <>
    <div className='p-4'>
        <h2 className='border-b text-xl md:text-2xl border-slate-50 w-max my-4'>Planes</h2>
        <h2>Todos nuestros servicios tienen las mismas dos modalidades, <b className='text-[#a78bfa]'>Standard</b> o <b className='text-[#a78bfa]'>Premium</b></h2>
   
        <section className='border-t-2 border-amber-50 my-4'>
  <h2 className='border-b w-max border-slate-50 mt-4'>
    Plan Standard
    </h2>
    <p>El plan ideal para pequeños negocios o particulares que ofrecen sus servicios</p>
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
          <p>Para negocios con requerimientos muy especifícos, la identidad digital de tu marca tus clientes no la van a olvidar
          </p>
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