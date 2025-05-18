import React, {useRef, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useLanguage } from '../config/LanguageContext';

const Charts = () => {
    const contentRef = useRef(null);
    const contentSecondRef = useRef(null);
    const {lang} = useLanguage();

    const [active, setActive] = useState(null);

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const {ref: ref2, inView: inView2} = useInView({
        threshold: 0.2
    })
    return (
        <div className='flex flex-col h-auto w-full'>
            <section className='grid grid-cols-1 leading-relaxed py-4 md:grid-cols-2 w-full'>
                <h4 className='text-xl border-b-2 border-purple-700 py-2 font-semibold px-2 md:self-center'>
                    {lang === 'en' ? 'A significant number of small and medium businesses have already established their digital presence.' : 'Una importante cantidad de pequeños y medianos negocios ya han establecido su presencia digital.'}
                </h4>
                <div className='flex flex-col items-center'>
                    <div className='relative flex justify-center w-full'>
                       <svg
                       ref={ref}
                       className='w-full transition-all duration-500 ease-in' 
                       xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 375 374.99999"
                       version="1.0">
                        <path 
                        className={`path1 ${inView ? 'animate' : ''}`}
                        stroke="#bdb2ff"
                        strokeWidth="2"
                        d="m192.78516 181.84766 32.99218-121.3047c-2.32812-.70312-4.67578-1.33984-7.03906-1.91405-2.36328-.57422-4.74219-1.08203-7.13281-1.52344-2.39453-.4414-4.79688-.8164-7.20703-1.1289a133.19067 133.19067 0 0 0-7.26172-.72657c-2.42578-.17578-4.85547-.28516-7.28906-.32422-2.4297-.04297-4.86328-.01953-7.29297.07422a133.4378 133.4378 0 0 0-7.28125.48047 132.68662 132.68662 0 0 0-7.24219.8789c-2.40625.35938-4.80078.78516-7.17969 1.27735-2.38281.49219-4.75 1.05078-7.10156 1.67187-2.35156.6211-4.6875 1.3086-7 2.0625-2.3125.75-4.60547 1.56641-6.875 2.44141-2.26563.8789-4.51172 1.82031-6.72656 2.82031a133.70996 133.70996 0 0 0-6.5625 3.1875c-2.16016 1.1211-4.28516 2.30469-6.3789 3.54297-2.08985 1.24219-4.14845 2.53906-6.17188 3.89063-2.01954 1.35546-4.00391 2.76171-5.94532 4.22656a127.6231 127.6231 0 0 0-5.70703 4.54687c-1.85937 1.56641-3.67578 3.1836-5.44531 4.85157-1.76953 1.67187-3.49219 3.38671-5.16797 5.14843-1.67578 1.76563-3.30469 3.57422-4.8789 5.42579-1.57813 1.85156-3.10157 3.75-4.57032 5.6875-1.47265 1.93359-2.89062 3.91015-4.25 5.92578-1.36328 2.01562-2.66797 4.0703-3.91797 6.15625a130.00115 130.00115 0 0 0-3.57421 6.36328c-1.12891 2.15234-2.20313 4.33594-3.21485 6.54687-1.01172 2.21094-1.96094 4.45313-2.84766 6.71485-.88671 2.26562-1.71093 4.55468-2.47265 6.86328-.76172 2.3125-1.46094 4.64062-2.09375 6.99219-.63281 2.34765-1.19922 4.71093-1.70313 7.09375-.5 2.3789-.9375 4.76953-1.30859 7.17578-.36719 2.40234-.67188 4.8164-.91016 7.23828-.23828 2.42187-.40625 4.84765-.51172 7.27734a133.5562 133.5562 0 0 0-.10546 7.29297 133.6797 133.6797 0 0 0 .29297 7.29297c.16796 2.42578.39843 4.84766.69921 7.26172.29688 2.41406.66407 4.8164 1.09375 7.21094.4336 2.39453.9297 4.77343 1.4922 7.14062s1.1914 4.71875 1.8828 7.05078c.69532 2.33203 1.45313 4.64063 2.27344 6.92969.82031 2.29297 1.70313 4.5586 2.64844 6.80078.94531 2.23828 1.94922 4.45313 3.01953 6.64063 1.0664 2.18359 2.19531 4.33984 3.38281 6.46484 1.1836 2.1211 2.42969 4.21094 3.73047 6.26562 1.30469 2.0547 2.66016 4.07422 4.07422 6.0547 1.41406 1.97655 2.8789 3.91796 4.40234 5.8164 1.51954 1.89844 3.08985 3.7539 4.71485 5.5664 1.6211 1.8125 3.29297 3.57813 5.01562 5.30079 1.71875 1.71875 3.48438 3.39062 5.30078 5.01171 1.8125 1.6211 3.66797 3.19532 5.56641 4.71485 1.89844 1.51953 3.83984 2.98437 5.82031 4.39844 1.98047 1.41015 4 2.76953 6.05469 4.0703 2.05469 1.30079 4.14453 2.54298 6.26953 3.73048 2.1211 1.1875 4.27734 2.3125 6.46484 3.3789 2.1875 1.0664 4.39844 2.07422 6.64063 3.01953 2.24219.94532 4.50781 1.82422 6.80078 2.64454 2.28906.8203 4.60156 1.57812 6.9336 2.26953 2.33203.6914 4.67968 1.3164 7.04687 1.8789s4.75 1.0586 7.14453 1.49219c2.39453.42969 4.79688.79297 7.21094 1.09375a133.0589 133.0589 0 0 0 7.26172.6914 133.6945 133.6945 0 0 0 7.28906.29298c2.4336.03125 4.86719-.00782 7.29688-.10938a133.39036 133.39036 0 0 0 7.27734-.51563c2.42187-.23828 4.83203-.53906 7.23828-.91015 2.40234-.3711 4.79688-.8086 7.17578-1.3125s4.7461-1.07422 7.09375-1.70703c2.34766-.63281 4.67969-1.33203 6.98828-2.09375 2.3086-.76172 4.59766-1.58594 6.86328-2.47656 2.26172-.88672 4.5-1.83985 6.71485-2.85157 2.21094-1.01172 4.39453-2.08203 6.54687-3.21484 2.15235-1.13281 4.27344-2.32422 6.35938-3.57422s4.14062-2.5586 6.15234-3.92188c2.01563-1.36328 3.99219-2.77734 5.92969-4.25 1.9375-1.47265 3.83203-2.99609 5.6836-4.57421 1.85156-1.57813 3.66015-3.20313 5.42187-4.87891a133.90461 133.90461 0 0 0 5.14844-5.17188c1.66406-1.77343 3.28515-3.58984 4.85156-5.44921 1.5664-1.85938 3.08203-3.76172 4.54297-5.70704 1.46484-1.9453 2.87109-3.92578 4.22265-5.94921 1.35547-2.02344 2.64844-4.07813 3.89063-6.17188 1.23828-2.09375 2.41797-4.21875 3.53906-6.3789 1.1211-2.16016 2.1836-4.34766 3.1836-6.5625 1.0039-2.21875 1.9414-4.46094 2.8203-6.73047.875-2.26953 1.69141-4.5625 2.44141-6.875.75-2.3125 1.4375-4.64844 2.0586-7 .62109-2.35157 1.17578-4.71875 1.66796-7.10157a131.60387 131.60387 0 0 0 1.27735-7.18359c.35937-2.40625.64844-4.82031.875-7.24219.22656-2.42187.38672-4.84765.47656-7.27734.09375-2.4336.11719-4.86328.07422-7.29688a133.4247 133.4247 0 0 0-.32813-7.28906c-.17968-2.42578-.42187-4.84375-.73046-7.25781-.3125-2.41406-.6875-4.8164-1.13282-7.20703-.4414-2.39063-.94921-4.76953-1.52343-7.13281-.57422-2.3672-1.21485-4.71094-1.91797-7.03907Zm0 0"/>
                        <path 
                        className={`path2 ${inView ? 'animate' : ''}`}
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none" d="m242.01172 44.67578-32.9961 121.30078 121.3047-32.9961c-.78907-2.59374-1.65235-5.16015-2.59766-7.69921-.94532-2.53906-1.96485-5.05078-3.06641-7.52734-1.09766-2.47657-2.26953-4.91797-3.51953-7.32422-1.2461-2.40235-2.57031-4.76953-3.96094-7.09375-1.39453-2.32422-2.85937-4.60156-4.39062-6.83985-1.53516-2.23437-3.13282-4.41796-4.80079-6.55468-1.66796-2.13672-3.39843-4.21875-5.1953-6.25a132.8541 132.8541 0 0 0-5.56641-5.91797 132.89983 132.89983 0 0 0-5.92188-5.57031c-2.02734-1.79297-4.11328-3.52344-6.25-5.19141-2.13281-1.66797-4.32031-3.26953-6.55469-4.80078-2.23437-1.53516-4.51562-2.9961-6.83984-4.39063-2.32422-1.39453-4.6875-2.71484-7.09375-3.96484-2.40625-1.2461-4.84766-2.42188-7.32422-3.51953-2.47656-1.09766-4.98437-2.1211-7.52344-3.0625-2.54297-.94532-5.10937-1.8125-7.70312-2.59766Zm0 0"/>
                        </svg>
                        <small className={`top-1/2 left-1/3 text-white p-2 bg-black/30 font-black absolute transition-all duration-500 ease-in ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>{lang === 'en' ? 'Business that have a website' : 'Negocios que tienen sitio web'}</small>
                        <small className={`top-1/4 text-white p-2 bg-black/40 font-black left-1/2 absolute transition-all duration-500 ease-in ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>{lang === 'en' ? "Businesses that still don't have a website" : 'Negocios que aún no tienen sitio web'}</small>
                    </div>
                </div>
               
            </section>
            <div className='px-2 w-full flex justify-center flex-col items-center py-6'>
                    <p className='text-xl font-black'>{lang === 'en' ? "If you're in the white portion of the graph, it's time to step out" : 'Si estás en la porción blanca de la gráfica es el momento de salir'}</p>
                    <Link to='/contact'>
                    <button className='action'>{ lang === 'en' ? 'Get Started' : 'Comenzar'}</button>
                    </Link>
                </div>
            <hr />
            <section className='flex flex-col md:flex-row relative items-center pt-12 pb-6 justify-center w-full'>
            
                <div>
                    <div className='flex justify-center flex-col items-center w-full px-2'>
                <h4 className='text-xl text-center'>{lang === 'en' ? 'Global eCommerce Growth' : 'Crecimiento del comercio electrónico a nivel global'}</h4>
                <small>{lang === 'en' ? 'Period: 2018-2024' : 'Período : 2018-2024'} </small>
                </div>

                <svg 
                className='w-full max-w-2xl'
                xmlns="http://www.w3.org/2000/svg"
                ref={ref2}
                viewBox="0 0 375 374.99999" version="1.0">
                    <defs><clipPath id="a">
                        <path d="M22.41797 278h330v35.67188h-330Zm0 0" /></clipPath><clipPath id="b">
                            <path d="M22.41797 278H352v29H22.41797Zm0 0" /></clipPath><clipPath id="c">
                                <path d="M274 61.67188h57V75h-57Zm0 0" /></clipPath></defs>
                                <g className={`${inView2 ? 'column' : ''}`} clipPath="url(#a)">
                                    <path className={`${inView2 ? 'column' : ''}`} stroke="#414141" d="m24.17188 312.33203-1.67579-6.20312 25.05079-19.41797 303.63671-8.57813 1.32813 7.78125-20.0586 27.41016Zm0 0" fillRule="evenodd" /></g>
                                    <g className={`${inView2 ? 'column' : ''}`} clipPath="url(#b)">
                                        <path className={`${inView2 ? 'column' : ''}`} stroke="#939393" d="m22.4961 306.13281 25.05078-28.0039h303.63671l-21.11328 28.0039Zm0 0" fillRule="evenodd" /></g>
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#bdb2ff" d="m151.3789 177.5586-28.13671-3.9297v121.29688l28.13672 5.1836Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#ac6ad0" d="m179.64063 173.60547-28.6172 3.82422v122.73828l28.6172-5.94922Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} d="m151.375 170.78516 28.26563 2.84375-28.26563 4.28906-28.13281-4.28906Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#bdb2ff" d="m226.78516 120.71875-28.13672-5.7461V292.4375l28.13672 7.58594Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#ac6ad0" d="m255.04688 114.9375-28.6172 5.59375v179.57813l28.6172-8.70313Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} d="m226.78125 110.8125 28.26563 4.16406-28.26563 6.27344-28.13281-6.27344Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#bdb2ff" d="m302.6914 74.16016-28.13671-7.23829v223.52735l28.13672 9.55469Zm0 0" fillRule="evenodd" />
                                    <path className={`${inView2 ? 'column' : ''}`} fill="#ac6ad0" d="m330.95313 66.8789-28.6172 7.04297v226.1875l28.6172-10.96093Zm0 0" fillRule="evenodd" />
                                    <g className={`${inView2 ? 'column' : ''}`} clipPath="url(#c)">
                                        <path className={`${inView2 ? 'column' : ''}`} d="m302.6875 61.67969 28.26172 5.2461-28.26172 7.90233-28.13672-7.90234Zm0 0" fillRule="evenodd" /></g>
                                        <path className={`${inView2 ? 'column' : ''}`} fill="#ac6ad0" d="m110.13281 217.01563-28.61719 2.51171v80.67578l28.6172-3.91015Zm0 0" fillRule="evenodd" />
                                        <path className={`${inView2 ? 'column' : ''}`} fill="#bdb2ff" d="m81.8711 219.61328-28.13672-2.58203v79.72656l28.13671 3.40625Zm0 0" fillRule="evenodd" />
                                        <path className={`${inView2 ? 'column' : ''}`} d="m81.86719 215.16016 28.26562 1.87109-28.26562 2.8164-28.13281-2.8164Zm0 0" fillRule="evenodd" />
                                        
        <text x="50" y="280" fontFamily="Arial" fontSize="12" fill="#fff">$USD2.3T</text>
        <text x="125" y="240" fontFamily="Arial" fontSize="12" fill="#fff">$USD3.5T</text>
        <text x="200" y="200" fontFamily="Arial" fontSize="12" fill="#fff">$USD4.9T</text>
        <text x="275" y="180" fontFamily="Arial" fontSize="12" fill="#fff">$USD7.1T</text>
        <text x="50" y="320" fontFamily="Arial" fontSize="12" fill="#fff">2018</text>
        <text x="125" y="320" fontFamily="Arial" fontSize="12" fill="#fff">2020</text>
        <text x="200" y="320" fontFamily="Arial" fontSize="12" fill="#fff">2022</text>
        <text x="275" y="320" fontFamily="Arial" fontSize="12" fill="#fff">2024</text>

                </svg>
                </div>
                <div className='flex flex-col items-center w-full px-2'>
                    <div className='w-full text-xl px-2 font-bold text-center'>
                    <p>{lang === 'en' ? 'If you have a physical store, you should already have your online store' : 'Si tenes una tienda física ya deberías de tener tu tienda virtual'}</p>
                    <p>{lang === 'en' ? "And if you don't have one, don't worry. We take care of it" : 'Y si no la tenes, no te preocupes. Nosotros nos encargamos'}</p>
                </div>
                <Link to='/contact' >
                <button className='action'>{lang === 'en' ? 'Start today' : 'Comenza hoy'}</button>
                </Link>
                </div>
            </section>

        </div>
    )
}

export default Charts