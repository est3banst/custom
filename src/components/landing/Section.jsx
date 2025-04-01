import React from 'react'
import { useLanguage } from '../../config/LanguageContext'

const Section = () => {

  const {lang} = useLanguage();
  return (
    <div className='relative px-4 items-center flex flex-col w-full pt-24'>
        <section className='flex gap-2 uppercase'>
        <h2 className='text-xl md:text-2xl'>{lang === 'en' ? 'Why your business needs a' : "¿Por qué tu negocio necesita un "}
            <b className='text-xl md:text-2xl px-1 text-[#a78bfa]'>
            { lang === 'en' ? 'webiste' : "sitio web"}
            </b>
            ?
            </h2>
        </section>
        
    </div>
  )
}

export default Section