import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../config/LanguageContext';

const Charts = () => {
    const {lang} = useLanguage();

    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const {ref: ref2, inView: inView2} = useInView({
        threshold: 0.2
    })
    return (
        <div className='flex flex-col h-auto w-full'>
            <section className='grid grid-cols-1 leading-relaxed py-4 md:grid-cols-2 w-full'>
                <h4 className='text-xl text-center py-2 font-semibold px-2 md:self-center'>
                    {lang === 'en' ? "Let's start building your digital presence today" : 'Comencemos a construir tu presencia digital hoy'}
                </h4>
                <div className='flex flex-col items-center'>
                    <div className='relative flex justify-center w-full'>
                        <img
                        ref={ref}
                        className={`w-full max-w-3xl my-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} transition-all duration-300 ease-in-out`}
                        src="/web-app_14.svg" alt="" />
                       
                    </div>
                </div>
               
            </section>
            <div className='px-2 w-full flex justify-center flex-col items-center py-6'>
                    <p className='text-xl font-black'>{lang === 'en' ? "Get your brand online and grow faster with our web development service" : 'Coloca tu marca en internet y crece como nunca antes con nuestro servicio de desarrollo web'}</p>
                    <Link to='/services/spa-service'>
                    <button className='action'>{ lang === 'en' ? 'Get Started' : 'Comenzar'}</button>
                    </Link>
                </div>
            <hr />
            <section className='grid grid-cols-1 leading-relaxed py-4 lg:grid-cols-2 w-full'>
            
                <div className='flex flex-col w-full items-center'>
                    <div className='flex justify-center flex-col items-center w-full px-2'>
                <h4 className='text-xl text-center'>{lang === 'en' ? 'Start selling online, is easy with us' : 'Empezá a vender en línea, es facil con nosotros'}</h4>
              
                </div>
                <img
                ref={
                    ref2
                }
                className={`w-full max-w-3xl my-4 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} transition-all duration-300 ease-in-out`}
                src="/add-to-cart_c8.svg" alt="" />

                </div>
                <div className='flex flex-col items-center w-full px-2'>
                    <div className='w-full text-xl px-2 font-black my-auto text-center'>
                    <p>{lang === 'en' ? 'If you have a physical store, you should already have your online store' : 'Si tenes una tienda física ya deberías de tener tu tienda virtual'}</p>
                    <p>{lang === 'en' ? "And if you don't have one, don't worry. We take care of it" : 'Y si no la tenes, no te preocupes. Nosotros nos encargamos'}</p>
                </div>
                <Link to='/services/ecommerce' >
                <button className='action'>{lang === 'en' ? 'Start today' : 'Comenza hoy'}</button>
                </Link>
                </div>
            </section>

        </div>
    )
}

export default Charts