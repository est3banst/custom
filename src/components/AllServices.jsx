import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllServices = () => {
    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='h-auto flex gap-6 justify-evenly p-4 flex-col'>
                <section className='w-full lg:grid lg:grid-cols-3 my-3'>
                    <article className='md:flex md:flex-col md:justify-around'>
                        <h2 className='text-xl md:text-2xl'>
                            Desarrollo de Landing Pages o Aplicaciones de una Sola Página
                        </h2>

                    </article>
                    <div className='lg:block flex gap-2 flex-col items-center'>
                        <p className='text-base self-start border-b-4 border-[#a78bfa] w-max my-4 md:text-xl'>
                            Obtendrás:
                        </p>
                        <section className='flex w-4/6 gap-2 px-4 justify-center flex-col items-center'>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m-1 2h1.5v3.78l2.33 2.33l-1.06 1.06L14 12.4zM2 18a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3.83c.31.71.71 1.38 1.17 2zm1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h2.05L5 12l.05 1zm1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3c-.46.62-.86 1.29-1.17 2z"></path>
                            </svg>
                            <p >
                                Carga rápida y experiencia fluida para atraer más clientes.

                            </p>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"></path>
                            </svg>
                            <p>
                                Diseño moderno y adaptable a todos los dispositivos.

                            </p>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                                    <path d="m5 20l2.413-2.413m0 0a4.444 4.444 0 1 0 6.285-6.285a4.444 4.444 0 0 0-6.285 6.285"></path>
                                    <path d="M3 15.188a7.4 7.4 0 0 1-1-3.726C2 7.341 5.358 4 9.5 4h5c4.142 0 7.5 3.341 7.5 7.462c0 3.25-2.087 6.014-5 7.038"></path>
                                </g>
                            </svg>
                            <p>
                                Optimización SEO para mejorar la visibilidad en buscadores.

                            </p>

                        </section>
                    </div>
                    <div className='lg:block flex gap-2 flex-col items-center'>
                        <h2 className='self-start text-base md:text-xl border-b-4 border-[#a78bfa] w-max my-4'>
                            Impacto en el negocio:
                        </h2>

                        <section className='flex w-4/6 px-4 gap-2 justify-center flex-col items-center'>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                    <path d="M20 20H4V4"></path>
                                    <path d="M4 16.5L12 9l3 3l4.5-4.5"></path>
                                </g>
                            </svg>
                            <p>
                                Aumenta la conversión de visitantes en clientes.

                            </p>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    <path d="M20.985 12.52a9 9 0 1 0-8.451 8.463M3.6 9h16.8M3.6 15h10.9"></path>
                                    <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.391 11.512M19 22v-6m3 3l-3-3l-3 3"></path>
                                </g>
                            </svg>
                            <p>

                                Refuerza la identidad de marca con una web atractiva.

                            </p>
                            <svg
                                className='w-[55px] md:w-[80px]'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m10.354 12.95l-.627-.627q.162-.275.227-.61q.065-.336.065-.694t-.075-.693t-.236-.586l.627-.632q.284.378.426.886t.143 1.025t-.133 1.032q-.133.515-.417.899m1.952 1.939l-.633-.633q.587-.72.86-1.55q.275-.831.275-1.706t-.274-1.703q-.275-.828-.861-1.528l.633-.632q.696.829 1.041 1.826T13.692 11t-.345 2.04t-1.041 1.849M5 11.5q-.633 0-1.066-.434Q3.5 10.633 3.5 10t.434-1.066T5 8.5t1.066.434Q6.5 9.367 6.5 10t-.434 1.066T5 11.5m-3.5 4v-.171q0-.427.248-.764q.248-.336.67-.528q.592-.276 1.24-.406Q4.309 13.5 5 13.5t1.341.13q.65.132 1.242.407q.42.192.669.528q.248.337.248.764v.171zm17.5-4q-.633 0-1.066-.434Q17.5 10.633 17.5 10t.434-1.066T19 8.5t1.066.434q.434.433.434 1.066t-.434 1.066T19 11.5m-3.5 4v-.171q0-.427.248-.764q.248-.336.67-.528q.592-.276 1.24-.406q.65-.131 1.342-.131t1.341.13q.65.132 1.242.407q.42.192.669.528q.248.337.248.764v.171z"></path>
                            </svg>
                            <p>
                                Mejora la comunicación directa con la audiencia.

                            </p>
                        </section>

                    </div>

                </section>
                <Link to="/services/spa-service" >

                <div className='flex w-5/6 mx-auto'>
                    <button className='action'>
                        Landing Pages
                    </button>
                    </div>
                </Link>
                <hr />
                <section className='w-full lg:flex'>
                    <article className='md:flex md:flex-col md:justify-around'>
                        <h2 className='text-xl md:text-2xl'>
                            Desarrollo e Implementación de E-commerce
                        </h2>

                    </article>
                    <div className='lg:block flex flex-col gap-2 items-center'>
                        <p className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>
                            Obtendrás:
                        </p>
                        <section className='flex w-4/6 px-4 gap-2 justify-center flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 48 48">
                                <defs>
                                    <mask id="ipTPeopleSafeOne0">
                                        <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                                            <circle cx={24} cy={11} r={7} fill="#555555"></circle>
                                            <path d="M4 41c0-8.837 8.059-16 18-16"></path>
                                            <path fill="#555555" d="M28 29.2c0-1.067 7-3.2 7-3.2s7 2.133 7 3.2c0 8.533-7 12.8-7 12.8s-7-4.267-7-12.8"></path>
                                        </g>
                                    </mask>
                                </defs>
                                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPeopleSafeOne0)"></path>
                            </svg>
                            <p>
                                Plataforma segura y escalable para ventas en línea.

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16.839 4H7.16c-.527 0-.981 0-1.356.03c-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311a2 2 0 0 0-.17.604c-.026.174-.046.38-.062.597c-.033.436-.054.975-.067 1.522C3 9.457 3 10.637 3 11.197v.003a1 1 0 1 0 2 0c0-.28 0-.708.003-1.2H19v4.8c0 .577 0 .949-.024 1.232c-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C17.75 17 17.377 17 16.8 17H12a1 1 0 1 0 0 2h4.839c.527 0 .982 0 1.356-.03c.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167c.031-.375.031-.83.031-1.356V8.16c0-.527 0-.981-.03-1.356c-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A18 18 0 0 0 16.838 4m2.16 4H5.04c.012-.379.029-.727.05-1.013a7 7 0 0 1 .055-.503a1 1 0 0 1 .402-.375c.05-.025.15-.063.422-.085C6.25 6 6.623 6 7.2 6h9.6c.577 0 .949 0 1.232.024c.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422c.02.249.024.567.024 1.032"></path>
                                <path fill="currentColor" d="m9.314 15.877l-.72.7c.452.853.31 1.925-.429 2.641l-1.148 1.114a2.41 2.41 0 0 1-3.33 0a2.22 2.22 0 0 1 0-3.21l.72-.698a2.22 2.22 0 0 1 .428-2.642l1.148-1.114a2.41 2.41 0 0 1 3.33 0a2.22 2.22 0 0 1 0 3.21m-.651-.61a1.377 1.377 0 0 0 0-1.988a1.465 1.465 0 0 0-2.029 0l-1.149 1.114a1.38 1.38 0 0 0-.368 1.382a2.42 2.42 0 0 1 2.909.11zM7.374 16.5a1.47 1.47 0 0 0-1.748 0a1.47 1.47 0 0 0 1.748 0m-3.037 1.233a1.377 1.377 0 0 0 0 1.988a1.465 1.465 0 0 0 2.029 0l1.149-1.114c.385-.373.508-.906.368-1.382a2.42 2.42 0 0 1-2.909-.11zM14 13a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"></path>
                            </svg>
                            <p>
                                Integración con métodos de pago y gestión de envíos.

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1 1 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1 1 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z"></path>
                                <path fill="currentColor" d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.99 2.99 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2"></path>
                            </svg>
                            <p>
                                Diseño intuitivo que facilita la compra y fideliza clientes.

                            </p>
                        </section>
                    </div>
                    <div className='lg:block flex flex-col items-center'>
                        <h2 className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>

                            Impacto en el negocio:
                        </h2>
                        <section className='flex w-4/6 px-4 gap-2 justify-center flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a1 1 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></path>
                            </svg>
                            <p>
                                Expansión del mercado y aumento de ventas.

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M16 27c-3.6 0-7.1-1.8-9.2-5H12v-2H4v8h2v-3.7c2.5 3 6.1 4.7 10 4.7zm15-4v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V15h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H17v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V29h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-4-15h5.2C21.9 4.9 15.1 3.5 10 6.8c-3.1 2-5 5.5-5 9.2H3C3 8.8 8.8 3 16 3c3.9 0 7.5 1.7 10 4.7V4h2v8h-8z"></path>
                            </svg>
                            <p>

                                Automatización de procesos para mayor eficiencia.

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" d="M4.5 10.5v-.25a1.75 1.75 0 1 1 3.5 0v.09c0 .427-.148.84-.42 1.17L4.5 15.25v.25h4m5-2h-4v-.25A8.93 8.93 0 0 0 11 8.296V8m2.5 5.5V10m0 3.5V16M16 8v4.75m0 0a1.75 1.75 0 1 1 3.5 0V16M16 12.75V16m-4 7.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5Z" strokeWidth={1}></path>
                            </svg>
                            <p>

                                Disponibilidad 24/7 para generar ingresos constantes.

                            </p>
                        </section>
                    </div>


                </section>
                <Link to="/services/ecommerce">
                <div className='flex w-5/6 mx-auto'>
                    <button className='action'>E-commerce</button>
                </div>
                        </Link>
                <hr />
                <section className='w-full lg:flex'>
                    <article className='md:flex md:flex-col md:justify-around'>
                        <h2 className='text-xl md:text-2xl'>
                            Sistemas de Gestión Empresarial
                        </h2>
                    </article>
                    <div className='lg:block flex gap-2 flex-col items-center'>

                        <p className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>
                            Obtendrás:
                        </p>
                        <section className='flex w-4/6 px-4 justify-center gap-2 flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2h6v2h1.67C17.4 4 18 4.6 18 5.33V12c-.7 0-1.37.13-2 .35V6H8v14h4.35c.26.75.65 1.42 1.19 2M18 13l2.25 2.25L18 17.5V16c-1.85 0-3.06 1.96-2.24 3.62l-1.09 1.09c-1.76-2.66.14-6.21 3.33-6.21zm0 11l-2.25-2.25L18 19.5V21c1.85 0 3.06-1.96 2.24-3.62l1.09-1.09c1.76 2.66-.14 6.21-3.33 6.21z"></path>
                                </svg>
                            <p>
                                Optimización de procesos internos y gestión eficiente.
                                
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m5.737-.737L21.5 2.5m-3.763 3.763c-.44-.44-.154-2.242-.04-3.263m.04 3.263c.44.44 2.242.154 3.263.04M6.263 17.737L2.5 21.5m3.763-3.763c-.44-.44-2.242-.154-3.263-.04m3.263.04c.44.44.154 2.242.04 3.263m11.434-3.263L21.5 21.5m-3.763-3.763c.44-.44 2.242-.154 3.263-.04m-3.263.04c-.44.44-.154 2.242-.04 3.263M6.263 6.263L2.5 2.5m3.763 3.763c.44-.44.154-2.242.04-3.263m-.04 3.263c-.44.44-2.242.154-3.263.04" color="currentColor"></path>
                                </svg>
                            <p>
                                Centralización de datos para mejor toma de decisiones.
                                

                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M16 27c-3.6 0-7.1-1.8-9.2-5H12v-2H4v8h2v-3.7c2.5 3 6.1 4.7 10 4.7zm15-4v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V15h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H17v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V29h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-4-15h5.2C21.9 4.9 15.1 3.5 10 6.8c-3.1 2-5 5.5-5 9.2H3C3 8.8 8.8 3 16 3c3.9 0 7.5 1.7 10 4.7V4h2v8h-8z"></path>
                                </svg>
                            <p>
                                Automatización de tareas para reducir costos operativos.
                                
                            </p>
                        </section>

                    </div>
                    <div className='lg:block flex gap-2 flex-col items-center'>
                        <h2 className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>

                            Impacto en el negocio:
                        </h2>
                        <section className='flex w-4/6 px-4 gap-2 justify-center flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m11.5 11.792l3 3q.14.14.15.345t-.15.363t-.354.16t-.354-.16l-3.05-3.05q-.13-.13-.186-.274t-.056-.297V7.5q0-.213.144-.356T11.001 7t.356.144t.143.356zM18 5.885h-2.5q-.213 0-.356-.144Q15 5.597 15 5.384t.144-.356t.356-.143H18v-2.5q0-.213.144-.357t.357-.144t.356.144t.143.357v2.5h2.5q.213 0 .356.144t.144.356t-.144.356t-.356.144H19v2.5q0 .212-.144.356t-.357.143t-.356-.143T18 8.384zM11.003 20q-1.666 0-3.123-.622t-2.545-1.71t-1.712-2.544T3 12.003t.622-3.123t1.711-2.546q1.09-1.089 2.545-1.711T11 4q.275 0 .513.013t.512.062q.214 0 .357.14t.143.367q0 .207-.143.35t-.357.143q-.275 0-.509-.038T11 5Q8.089 5 6.044 7.044T4 12t2.044 4.956T11 19t4.956-2.044T18 12q0-.213.144-.356t.357-.144t.356.144T19 12q0 1.667-.622 3.122t-1.71 2.545q-1.089 1.088-2.544 1.71q-1.455.623-3.121.623"></path>
                                </svg>
                            <p>
                                Ahorro de tiempo y mejora en la productividad.
                                
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M27 19c-.3 0-.7.1-1 .2L20.4 12c1-1.1 1.6-2.5 1.6-4c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.6.6 3 1.6 4L6 19.2c-.3-.1-.7-.2-1-.2c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3c0-.6-.2-1.1-.5-1.6l5.6-7.1c.6.3 1.2.5 1.9.6v10.3c-1.2.4-2 1.5-2 2.8c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8V13.9c.7-.1 1.3-.3 1.9-.6l5.6 7.1c-.3.5-.5 1-.5 1.6c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3M16 4c2.2 0 4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4M5 23c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m11 5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m11-5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></path>
                                </svg>
                            <p>
                                Mayor control y análisis de datos en tiempo real.
                               
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[55px] md:w-[80px]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M21.5 21H20V4.5a.5.5 0 0 0-1 0V21h-3V8.5a.5.5 0 0 0-1 0V21h-3v-8.5a.5.5 0 0 0-1 0V21H8v-4.5a.5.5 0 0 0-1 0V21H3V2.5a.5.5 0 0 0-1 0v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 0-1"></path>
                                </svg>
                            <p>
                                Facilita la escalabilidad y crecimiento de la empresa.
                                
                            </p>
                        </section>
                    </div>
                </section>
                <Link>
                <div className='flex w-5/6 mx-auto'>

                    <button className='action'>Sistemas de administración</button>
                </div>
                    </Link>
                <hr />
                <section>
                    <article>
                        <h2>
                            Optimización Web y Soporte de Aplicaciones
                        </h2>
                        </article>
                        <div>
                        <p className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>
                            Obtendrás:
                        </p>
                    
                    <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="currentColor" d="M15 22.007H5v-2h10ZM22 4l-4.735 5.955l-.22.27l-5.63 7.19a2.001 2.001 0 1 1-2.83-2.83ZM2.645 7.234A10.84 10.84 0 0 0 1.19 15H2v-1a9.7 9.7 0 0 1 1.69-5.52ZM12 2a10.96 10.96 0 0 0-8.119 3.597L5.025 6.96A7.43 7.43 0 0 1 10 5a7.43 7.43 0 0 1 4.997 1.978l3.55-2.802A10.94 10.94 0 0 0 12 2m6.83 9.2l-.233.287l-.728.93A10 10 0 0 1 18 14v1h4.81a10.88 10.88 0 0 0-1.183-7.318Z"></path>
</svg>
                        <p>
                            Mejor rendimiento y velocidad de carga para evitar pérdidas de clientes.

                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3"></path>
</svg>
                        <p>
                            Seguridad mejorada para proteger datos y prevenir ataques.

                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
	<path fill="currentColor" d="M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4l-3.5-4h2.32a4.44 4.44 0 0 0-4.32-3.45c-1.45 0-2.73.71-3.54 1.78L4.95 5.66a6.97 6.97 0 0 1 5.25-2.38m-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48a4.44 4.44 0 0 0 4.32 3.45c1.45 0 2.73-.71 3.54-1.78l1.71 1.95a6.95 6.95 0 0 1-5.25 2.38"></path>
</svg>
                        <p>
                            Mantenimiento y actualizaciones constantes para estabilidad.

                        </p>
                    </section>

                    <div>
                    <h2 className='self-start border-b-4 border-[#a78bfa] w-max my-4 text-base md:text-xl'>

Impacto en el negocio:
</h2>
                        <section>
                            <p>

                                Experiencia de usuario mejorada, aumentando la retención.
                            </p>
                            <p>

                                Reducción de errores y fallos que afectan las ventas.
                            </p>
                            <p>
                                Mayor confiabilidad y competitividad en el mercado.

                            </p>
                        </section>
                    </div>
                    </div>
                </section>
                <hr />
            </div>
        </>
    )
}

export default AllServices