import React from 'react'
import { Link } from 'react-router-dom'
import Lighting from './Lighting'
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
      Diseñamos y desarrollamos sitios web modernos, escalables y de alto rendimiento adaptados a tus necesidades.
    </p>
  </div>
  <div className="flex items-start gap-2">
    <span className="w-[8px] shrink-0 h-[8px] bg-[#a78bfa] rounded-full mt-2"></span>
    <p className='leading-relaxed'>
      Especializados en sitios web que convierten visitantes en clientes.
    </p>
  </div>
  <div className="flex items-start gap-2">
    <span className="w-[8px] shrink-0 h-[8px] bg-[#a78bfa] rounded-full mt-2"></span>
    <p className='leading-relaxed'>
      Eleva tu presencia digital con interacciones sofisticadas y una identidad de marca única.
    </p>
  </div>
</div>

          <div ref={ref2} className={`bg-[#1d1d1db5] rounded-br-2xl rounded-tl-2xl backdrop-blur-xs text-xl flex transition-all duration-500 ease-in flex-col gap-3 py-8 px-4 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
            <p>Todo el mundo antes de contratar un servicio o pagar un producto hace una búsqueda en línea, si no estás es muy probable que pierdas ese potencial cliente</p>
            <p>Vos te ocupas de tu negocio mientras nosotros construimos tu marca digital</p>
            
            </div>
            <p className='text-2xl text-center self-center w-max border-b-2 border-[#a78bfa] font-semibold'>
                Comenzamos ?
            </p>
            <section className='flex p-3 items-center justify-center'>
                <Link to="/contact">
                <button className="action">Contactar</button>
                </Link>
            </section>
        </div>
        </Lighting>
        
        </>
    )
}

export default Us