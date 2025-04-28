import React from 'react'
import Nav from '../Nav'
import Managment from './Managment'
import FormModal from '../FormModal'
import { useState } from 'react'
import Lighting from '../Lighting'
import Footer from '../Footer'
import useScrollTop from '../hooks/useScrollTop'
import { useLanguage } from '../../config/LanguageContext'

const LayoutMs = () => {
    useScrollTop();
    const date = new Date();
    const currentYear = date.getFullYear();
    const [showCrmModal, setShowCrmModal] = useState(false);
    const {lang} = useLanguage();

    const closeModal = (e) => {

        if (e.target.id === 'modalCrmOverlay') {
            setShowCrmModal(false);
        }
    };
    

    const benefits = [
        {
            title: lang === 'en' ? 'Centralized Member Management' : "Gestión centralizada de miembros",
            text: lang === 'en' ? 'Manage registrations, renewals, and communication from a single place' : "Administra inscripciones, renovaciones y comunicación desde un solo lugar",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" className='animate-icons w-[65px] md:w-[80px]' viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
                    <path d="m33.683 17.838l7.225-7.225c1.137-1.137 1.234-2.87.218-3.887s-2.75-.918-3.887.219l-7.08 7.08"></path>
                    <path d="M30.159 14.024V8.403c0-1.608-1.157-2.903-2.594-2.903S24.97 6.795 24.97 8.403l-.019 6.335c4.405.37 7.93 3.891 8.31 8.312m.422-5.21h5.719c1.608 0 2.903 1.156 2.903 2.593s-1.295 2.591-2.903 2.594l-6.142.011m-18.942-5.2l-7.226-7.225c-1.137-1.137-1.234-2.87-.218-3.887s2.75-.918 3.887.219l7.08 7.08"></path>
                    <path d="M17.841 14.024V8.403c0-1.608 1.157-2.903 2.594-2.903s2.594 1.295 2.594 2.903l.019 6.335c-4.405.37-7.93 3.891-8.31 8.312"></path>
                    <path d="M14.318 17.84h-5.72c-1.608 0-2.903 1.156-2.903 2.593s1.295 2.594 2.903 2.594l6.142.011m18.943 7.124l7.225 7.225c1.137 1.137 1.234 2.87.218 3.887s-2.75.918-3.887-.219l-7.08-7.08"></path>
                    <path d="M30.159 33.976v5.621c0 1.608-1.157 2.903-2.594 2.903s-2.594-1.295-2.594-2.903l-.019-6.335c4.405-.37 7.93-3.891 8.31-8.312"></path>
                    <path d="M33.683 30.16h5.719c1.608 0 2.903-1.156 2.903-2.593s-1.295-2.594-2.903-2.594l-6.142-.011m-18.942 5.2l-7.226 7.225c-1.137 1.137-1.234 2.87-.218 3.887s2.75.918 3.887-.219l7.08-7.08"></path>
                    <path d="M17.841 33.976v5.621c0 1.608 1.157 2.903 2.594 2.903s2.594-1.295 2.594-2.903l.019-6.335c-4.405-.37-7.93-3.891-8.31-8.312"></path>
                    <path d="M14.318 30.16h-5.72c-1.608 0-2.903-1.156-2.903-2.593s1.295-2.594 2.903-2.594l6.142-.011"></path>
                </g>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M29.658 22.019A5.997 5.997 0 0 0 18 24a5.997 5.997 0 0 0 11.658 1.981" strokeWidth={1}></path>
            </svg>)
        },
        {
            title: lang === 'en' ? 'Task Automation' : "Automatización de tareas",
            text: lang === 'en' ? 'Reduce manual work with automated reminders, payments, and reports' : "Reduce el trabajo manual con recordatorios, pagos y reportes automatizados",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className='animate-icons w-[65px] md:w-[80px]' viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M13 20.693c-.905.628-2.36.292-2.675-1.01a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492.362 1.716 2.219.674 3.03"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 10l5-3l-5-3z"></path>
                    </g>
                </svg>
            )
        },
        {
            title: lang === 'en' ? 'Higher Engagement and Retention' : "Mayor compromiso y retención",
            text: lang === 'en' ? 'Enhance the member experience with personalized follow-ups and efficient communication' : "Mejora la experiencia de los miembros con seguimiento personalizado y comunicación eficiente",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" className='animate-icons w-[65px] md:w-[80px]' viewBox="0 0 640 512">
                <path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24m0 464c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m83.2-328a64 64 0 1 1 128 0a64 64 0 1 1-128 0M32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4c-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32m461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32zm-102.4-61.6c32.1 7.4 58.1 30.9 68.9 61.6c3.5 10 5.5 20.8 5.5 32c0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32c0-11.2 1.9-22 5.5-32c10.5-29.7 35.3-52.8 66.1-60.9c7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7.8 21.6 2.4zm44-130.4a64 64 0 1 1 128 0a64 64 0 1 1-128 0M321.6 96a80 80 0 1 1 0 160a80 80 0 1 1 0-160"></path>
            </svg>)
        }
    ]

    return (
        <>
           <Lighting>
                <Nav />

                <div className='p-4 z-20 flex relative flex-col gap-3'>
                    <div className='pt-24 px-4 relative flex flex-col gap-2'>
                        <h2 className='text-xl uppercase md:text-2xl'>
                            {lang === 'en' ? "Why is it necessary to manage your business from an" : 'Por qué es necesario gestionar tu negocio desde un'} <b className='text-xl md:text-2xl px-1 text-[#a78bfa]'> {lang === 'en' ? 'administration system in' : 'sistema de administración en'} {currentYear} </b>?
                        </h2>
                        <div className='h-auto backdrop-blur-md bg-[#17171720] leading-relaxed p-4 rounded-xs shadow-lg w-full'>
                            <h3 className='px-2 my-4'>
                                {lang === 'en' ? 'Technology evolves quickly and' : 'La tecnología avanza rápido y'} <b>{lang === 'en' ? 'your business cannot be left behind' : 'tu negocio no puede quedarse atrás'}</b>. {lang === 'en' ? ' Optimize management with our CRM and take your business to the next level in 2025' : 'Optimiza la gestión con nuestro CRM y lleva tu negocio al siguiente nivel en 2025'}
                            </h3>
                        </div>
                        <p className='px-2 text-xl uppercase text-[#a78bfa] font-bold'>{lang === 'en' ? "You'll gain" : 'Beneficios'}: </p>
                        <div className='px-4 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full '>

                            {benefits.map((item, key) => (
                                <Managment
                                    key={key}
                                    title={item.title}
                                    text={item.text}
                                    icon={item.svg} />
                            ))}
                        </div>
                        <div className='bg-[#242424] my-4 p-4'>
                            <h2 className='uppercase font-black'>{lang === 'en' ? 'Process' : 'Proceso'}</h2>
                          <hr />
                            <p className='py-4'>{lang === 'en' ? "We'll have a meeting to discuss your business current workflow, after the meeting we'll send you a form with questions related to your business for you to fill to have a broader view and to start engineering the solution" : 'Tendremos una reunión para discutir el flujo de trabajo actual de su negocio, después de la reunión le enviaremos un formulario con preguntas relacionadas con su negocio para que las complete, para tener una visión más amplia y comenzar a diseñar la solución.'}</p>
                            <hr />
                            <p className='py-4'>{lang === 'en' ? "Once we get started working on it, you'll have a first functional version of the solution within two months, we are right next to you at this point so any improvements or addons you wish will be made immediately, we'll do this for the next month after the first release, after that you will receive weekly support for the application. At this point the solution has met all the requirements we previously set" :
                             'Una vez que comencemos a trabajar en ello, tendrá una primera versión funcional de la solución en dos meses. En este punto, estamos a su disposición, por lo que cualquier mejora o complemento que desee se implementará de inmediato. Lo haremos durante el mes siguiente al primer lanzamiento. Posteriormente, recibirá soporte semanal para la aplicación. En este punto, la solución cumple con todos los requisitos que establecimos previamente.'}</p>
                        </div>
                        </div>
                        <div className='p-4 w-full m-2 flex justify-center'>

                            <button className='action' onClick={() => setShowCrmModal(true)}>{lang === 'en' ? 'Get started' : 'Comenzar'}</button>
                        </div>
                        </div>

                        {showCrmModal && (
                            <div
                                id="modalCrmOverlay"
                                className="fixed inset-0 bg-black bg-opacity-50 p-4 flex justify-center items-center z-[555]"
                                onClick={closeModal}
                            >
                                <div className="bg-[#242424] p-6 rounded-lg shadow-lg relative w-[80%] max-w-lg" onClick={(e) => e.stopPropagation()}>
                                    <p className='my-2 '>{lang === 'en' ? "Fill out the information and we'll contact you to schedule a meeting. We'll discuss your needs and how to create the right system for your business" : 'Completa los datos y te contactaremos para agendar una reunión. Hablaremos de tus necesidades y de como crear el sistema adecuado para tu negocio'}</p>

                                    <button className="absolute cursor-pointer top-2 right-2 text-[#a78bfa] hover:text-gray-700" onClick={() => setShowCrmModal(false)}>
                                        ✖
                                    </button>
                                    <FormModal />
                                </div>
                               
                            </div>
                        )}
                

                <div className='bg-[#00000020] relative z-20 backdrop-blur-xs'>
                    <Footer />
                </div>
                </Lighting>
        </>
    )
}

export default LayoutMs
