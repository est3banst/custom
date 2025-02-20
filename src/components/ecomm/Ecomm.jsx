import React from 'react'

const Ecomm = () => {
  return (
    <>
    <div className='w-full'>
    <div className='flex flex-col w-full gap-3 px-auto'>
        
        <form
         className='max-w-xl space-y-3'
         action="">
            <div className='flex gap-1 p-2  flex-col'>
                <label htmlFor="">Nombre</label>
                <input className="border rounded-xs p-1 border-[#a78bfa]" type="text" name="" id="" />
            </div>
            <div className='flex gap-1 p-2  flex-col'>
                <label htmlFor="">Correo electrónico</label>
                <input className="border rounded-xs p-1 border-[#a78bfa]" type="text" />
            </div>
            <div className='flex gap-1 p-2  flex-col'>
                <label htmlFor="">Número de contacto</label>
                <input className="border rounded-xs p-1 border-[#a78bfa]" type="text" />
            </div>
            <button className='action'>Enviar datos</button>
        </form>

    </div>
    </div>
    
    </>
  )
}

export default Ecomm

const vals = [
    {
        title: '',
        text: ''
    },
    {
        title: '',
        text: ''
    },
    {
        title: '',
        text: ''
    },
   
]