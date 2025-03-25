import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TwistedGallery = ({ lang }) => {
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const force = window.scrollY / window.innerHeight * 20;

            if (refOne.current) refOne.current.style.transform = `translateX(${force}px)`;
            if (refTwo.current) refTwo.current.style.transform = `translateX(${-force}px)`;
            if (refThree.current) refThree.current.style.transform = `translateX(${force}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-auto py-4'>
            <section className='flex flex-col justify-center'>
                <h2 className='font-black border-b-2 border-purple-900 text-3xl px-2 py-4 my-8'>{lang === 'en' ? 'We have the right fit for your business' : 'Tenemos la solución ideal para tu negocio'}</h2>
                <span className='p-2'>
                    <p className='text-xl font-bold'>{lang === 'en' ? 'Start growing your business with us today' : 'Comenzá hoy a expandir tu negocio con nosotros' }</p>
                    <span className='flex px-4 py-5 text-xl items-center gap-5 font-semibold'>
                    <p>{lang === 'en' ? 'Transparent pricing' : 'Transparencia de precios'}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
	<g fill="none">
		<path fill="#785dc8" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id6)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id0)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id1)" fillOpacity={0.8} fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id7)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id2)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id3)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id4)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id5)" fillOpacity={0.8} fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<defs>
			<radialGradient id="f240id0" cx={0} cy={0} r={1} gradientTransform="rotate(47.198 -22.29 22.15)scale(10.1514)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id1" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.01214 2.70769 0 12.008 27.808)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id2" cx={0} cy={0} r={1} gradientTransform="rotate(-54.105 24.814 -21.83)scale(3.17799)" gradientUnits="userSpaceOnUse">
				<stop offset={0.177} stopColor="#a398d8"></stop>
				<stop offset={1} stopColor="#8a7acc" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id3" cx={0} cy={0} r={1} gradientTransform="matrix(0 3.02803 -2.08177 0 11.345 24.242)" gradientUnits="userSpaceOnUse">
				<stop offset={0.366} stopColor="#978ccf"></stop>
				<stop offset={1} stopColor="#7363b5" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id4" cx={0} cy={0} r={1} gradientTransform="matrix(.21913 21.7968 -19.36452 .19468 19.513 24.22)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id5" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.17861 2.70919 0 11.771 27.7)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<linearGradient id="f240id6" x1={10.719} x2={5.785} y1={20.389} y2={25.323} gradientUnits="userSpaceOnUse">
				<stop stopColor="#655898"></stop>
				<stop offset={0.199} stopColor="#978ccf"></stop>
				<stop offset={0.291} stopColor="#978ccf"></stop>
				<stop offset={0.362} stopColor="#978ccf"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.818} stopColor="#8842ec"></stop>
				<stop offset={1} stopColor="#6035be"></stop>
			</linearGradient>
			<linearGradient id="f240id7" x1={15.354} x2={20.792} y1={17.951} y2={23.716} gradientUnits="userSpaceOnUse">
				<stop stopColor="#473b76"></stop>
				<stop offset={0.266} stopColor="#6c5ea9"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.736} stopColor="#7c50d8"></stop>
				<stop offset={0.895} stopColor="#6035be"></stop>
			</linearGradient>
		</defs>
	</g>
</svg> 

                    </span>
        <span className='flex px-4 py-5 text-xl items-center gap-5 font-semibold'>
        <p>{lang === 'en' ? 'Effortless integrations' :'Integraciones sencillas'}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
	<g fill="none">
		<path fill="#785dc8" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id6)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id0)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id1)" fillOpacity={0.8} fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id7)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id2)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id3)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id4)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id5)" fillOpacity={0.8} fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<defs>
			<radialGradient id="f240id0" cx={0} cy={0} r={1} gradientTransform="rotate(47.198 -22.29 22.15)scale(10.1514)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id1" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.01214 2.70769 0 12.008 27.808)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id2" cx={0} cy={0} r={1} gradientTransform="rotate(-54.105 24.814 -21.83)scale(3.17799)" gradientUnits="userSpaceOnUse">
				<stop offset={0.177} stopColor="#a398d8"></stop>
				<stop offset={1} stopColor="#8a7acc" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id3" cx={0} cy={0} r={1} gradientTransform="matrix(0 3.02803 -2.08177 0 11.345 24.242)" gradientUnits="userSpaceOnUse">
				<stop offset={0.366} stopColor="#978ccf"></stop>
				<stop offset={1} stopColor="#7363b5" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id4" cx={0} cy={0} r={1} gradientTransform="matrix(.21913 21.7968 -19.36452 .19468 19.513 24.22)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id5" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.17861 2.70919 0 11.771 27.7)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<linearGradient id="f240id6" x1={10.719} x2={5.785} y1={20.389} y2={25.323} gradientUnits="userSpaceOnUse">
				<stop stopColor="#655898"></stop>
				<stop offset={0.199} stopColor="#978ccf"></stop>
				<stop offset={0.291} stopColor="#978ccf"></stop>
				<stop offset={0.362} stopColor="#978ccf"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.818} stopColor="#8842ec"></stop>
				<stop offset={1} stopColor="#6035be"></stop>
			</linearGradient>
			<linearGradient id="f240id7" x1={15.354} x2={20.792} y1={17.951} y2={23.716} gradientUnits="userSpaceOnUse">
				<stop stopColor="#473b76"></stop>
				<stop offset={0.266} stopColor="#6c5ea9"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.736} stopColor="#7c50d8"></stop>
				<stop offset={0.895} stopColor="#6035be"></stop>
			</linearGradient>
		</defs>
	</g>
</svg> 
        </span>
       <span className='flex px-4 py-5 text-xl items-center gap-5 font-semibold'>
       <p>{lang === 'en' ? 'Consistent quality' : 'Consistencia en calidad'}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
	<g fill="none">
		<path fill="#785dc8" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id6)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id0)" fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id1)" fillOpacity={0.8} fillRule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clipRule="evenodd"></path>
		<path fill="url(#f240id7)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id2)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id3)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id4)" fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<path fill="url(#f240id5)" fillOpacity={0.8} fillRule="evenodd" d="M11.771 29.774v-7.847l.038.04l12.525-11.803a3.25 3.25 0 0 1 4.457 4.73L13.94 28.89a3.24 3.24 0 0 1-2.168.884" clipRule="evenodd"></path>
		<defs>
			<radialGradient id="f240id0" cx={0} cy={0} r={1} gradientTransform="rotate(47.198 -22.29 22.15)scale(10.1514)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id1" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.01214 2.70769 0 12.008 27.808)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id2" cx={0} cy={0} r={1} gradientTransform="rotate(-54.105 24.814 -21.83)scale(3.17799)" gradientUnits="userSpaceOnUse">
				<stop offset={0.177} stopColor="#a398d8"></stop>
				<stop offset={1} stopColor="#8a7acc" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id3" cx={0} cy={0} r={1} gradientTransform="matrix(0 3.02803 -2.08177 0 11.345 24.242)" gradientUnits="userSpaceOnUse">
				<stop offset={0.366} stopColor="#978ccf"></stop>
				<stop offset={1} stopColor="#7363b5" stopOpacity={0}></stop>
			</radialGradient>
			<radialGradient id="f240id4" cx={0} cy={0} r={1} gradientTransform="matrix(.21913 21.7968 -19.36452 .19468 19.513 24.22)" gradientUnits="userSpaceOnUse">
				<stop offset={0.569} stopColor="#423473" stopOpacity={0}></stop>
				<stop offset={0.863} stopColor="#41366a"></stop>
			</radialGradient>
			<radialGradient id="f240id5" cx={0} cy={0} r={1} gradientTransform="matrix(0 -2.17861 2.70919 0 11.771 27.7)" gradientUnits="userSpaceOnUse">
				<stop offset={0.096} stopColor="#9447fe"></stop>
				<stop offset={0.846} stopColor="#9447fe" stopOpacity={0}></stop>
			</radialGradient>
			<linearGradient id="f240id6" x1={10.719} x2={5.785} y1={20.389} y2={25.323} gradientUnits="userSpaceOnUse">
				<stop stopColor="#655898"></stop>
				<stop offset={0.199} stopColor="#978ccf"></stop>
				<stop offset={0.291} stopColor="#978ccf"></stop>
				<stop offset={0.362} stopColor="#978ccf"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.818} stopColor="#8842ec"></stop>
				<stop offset={1} stopColor="#6035be"></stop>
			</linearGradient>
			<linearGradient id="f240id7" x1={15.354} x2={20.792} y1={17.951} y2={23.716} gradientUnits="userSpaceOnUse">
				<stop stopColor="#473b76"></stop>
				<stop offset={0.266} stopColor="#6c5ea9"></stop>
				<stop offset={0.523} stopColor="#7966c1"></stop>
				<stop offset={0.736} stopColor="#7c50d8"></stop>
				<stop offset={0.895} stopColor="#6035be"></stop>
			</linearGradient>
		</defs>
	</g>
</svg> 
       </span>
                </span>
            </section>
            <div className='relative w-full h-auto py-12 overflow-hidden gap-4 flex items-center'>
                <section className='w-full flex flex-col gap-1 items-center justify-center rotate-45'>
                    <article ref={refOne} className='flex w-full gap-1 transition-transform duration-300 ease-out'>
                        <img className="w-32 grow-2 aspect-square object-cover object-center" src="/dental-clinic.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/gym-web.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/login.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/products.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/personal-web.png" alt="" />
                    </article>
                    <article ref={refTwo} className='flex w-[130vw] md:w-full gap-4 transition-transform duration-300 ease-out'>
                        <img className="w-0 grow-2 aspect-square object-cover object-center" src="/login.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/personal-web.png" alt="" />
                        <img className="w-32 grow-2 aspect-square object-cover object-center" src="/gym-web.png" alt="" />
                       
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/products.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/dental-clinic.png" alt="" />
                    </article>
                    <article ref={refThree} className='flex w-full gap-4 transition-transform duration-300 ease-out'>
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/gym-web.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/personal-web.png" alt="" />
                        <img className="w-32 grow-2 aspect-square object-cover object-center" src="/products.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/dental-clinic.png" alt="" />
                        <img className="w-0 grow-1 aspect-square object-cover object-center" src="/login.png" alt="" />
                    </article>
                </section>
            </div>
            
        </div>
    );
};

export default TwistedGallery;