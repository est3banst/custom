import React from 'react'
import { useInView } from "react-intersection-observer"

const About = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    })
    return (

        <>
        <div ref={ref} className={`load-bord transition-all duration-[320ms]
            ${
                inView ? 'startAnim' : 
                ''
            }`}></div>
            <div className='text-xl p-4 flex flex-col gap-3 about-font'>
            <h2 className='heading-about uppercase'>Que hacemos</h2>
                <p>
                    Diseñamos y desarrollamos sitios web modernos, escalables y de alto rendimiento adaptados a tus necesidades.
                </p>
                <p>
                    Ya seas una startup o una empresa consolidada, nuestro equipo experto crea experiencias digitales atractivas y funcionales para que destaques en el mundo online.

                </p>
                <p>
                    ¡Construyamos algo increíble juntos!


                </p>
                <section className='flex p-3 items-center justify-center'>
                    <a className='action'>Contactar</a>

                </section>
            </div>
        </>

    )
}

export default About