import React from 'react'
import { Link } from 'react-router-dom'
import Lighting from './Lighting'

const Us = () => {
    return (
        <>
        <Lighting>
        <div className='flex font-bold flex-col w-full md:w-5/6 justify-center m-auto relative h-screen gap-4'>
        <div className="bg-[#17171702] backdrop-blur-2xl gap-4 flex w-full p-4 flex-col">
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

            <div className='bg-[#5e5e5e02] backdrop-blur-xs m-4'>
            <p>Todo el mundo antes de contratar un servicio o pagar un producto hace una búsqueda en línea, si no estás las chances son de que pierdas ese potencial cliente</p>
            <p>Vos te ocupas de tu negocio mientras nosotros construimos tu marca digital</p>
            
            </div>
            <p className='text-xl text-center font-semibold'>
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