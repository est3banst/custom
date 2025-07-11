import React, { useState } from 'react';
import Nav from '../Nav';
import FormModal from '../FormModal';
import SectionEcommerce from './SectionEcommerce';
import Footer from '../Footer';
import Lighting from '../Lighting';
import useScrollTop from '../hooks/useScrollTop'
import { useLanguage } from '../../config/LanguageContext';
import { useInView } from 'react-intersection-observer';

const LayoutStores = () => {

    useScrollTop()

    const { ref, inView } = useInView({
        triggerOnce: true,
    })
    const {lang} = useLanguage();
    
    const [showEcommModal, setShowEcommModal] = useState(false);
   
    const closeModal = (e) => {
      
        if (e.target.id === 'modalEcommOverlay') {
            setShowEcommModal(false);
        }
    };

    const ecommercebenefits = [
        {
            title: lang === 'en' ? 'Cost reduction' : "Reducción de costos",
            text: lang === 'en' ? 'Lower costs on rent and maintenance of a physical location, optimizing investment and increasing profitability' : "Menos gastos en alquiler y mantenimiento de un local físico, optimizando la inversión y aumentando la rentabilidad.",
            svg: (<svg
                className='animate-icons w-[55px] md:w-[80px]'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M327.027 65.816L229.79 128.23l9.856 5.397l86.51-55.53l146.735 83.116l-84.165 54.023l4.1 2.244v6.848l65.923-42.316l13.836 7.838l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l100.033-64.21l-24.828-14.062l24.827-15.937l-24.828-14.064l24.827-15.937l-23.537-13.333l23.842-15.305zm31.067 44.74c-21.038 10.556-49.06 12.342-68.79 4.383l-38.57 24.757l126.903 69.47l36.582-23.48c-14.41-11.376-13.21-28.35 2.942-41.67zM227.504 147.5l-70.688 46.094l135.61 78.066l1.33-.85c2.5-1.61 6.03-3.89 10.242-6.613c8.42-5.443 19.563-12.66 30.674-19.86c16.002-10.37 24.248-15.72 31.916-20.694zm115.467 1.17a8.583 14.437 82.068 0 1 .003 0a8.583 14.437 82.068 0 1 8.32 1.945a8.583 14.437 82.068 0 1-.87 12.282a8.583 14.437 82.068 0 1-20.273 1.29a8.583 14.437 82.068 0 1 .87-12.28a8.583 14.437 82.068 0 1 11.95-3.237m-218.423 47.115L19.143 263.44l23.537 13.333l-23.842 15.305l24.828 14.063l-24.828 15.938l24.828 14.063l-24.828 15.938l166.135 94.106L285.277 381.8v-11.72l-99.433 63.824L39.11 350.787l14.255-9.15l131.608 74.547L285.277 351.8v-11.72l-99.433 63.824L39.11 320.787l14.255-9.15l131.608 74.547L285.277 321.8v-11.72l-99.433 63.824L39.11 290.787l13.27-8.52l132.9 75.28l99.997-64.188v-5.05l-5.48-3.154l-93.65 60.11l-146.73-83.116l94.76-60.824l-9.63-5.543zm20.46 11.78l-46.92 30.115c14.41 11.374 13.21 28.348-2.942 41.67l59.068 33.46c21.037-10.557 49.057-12.342 68.787-4.384l45.965-29.504l-123.96-71.358zm229.817 32.19c-8.044 5.217-15.138 9.822-30.363 19.688a36222 36222 0 0 1-30.69 19.873c-4.217 2.725-7.755 5.01-10.278 6.632c-.09.06-.127.08-.215.137v85.924l71.547-48.088zm-200.99 17.48a8.583 14.437 82.068 0 1 8.32 1.947a8.583 14.437 82.068 0 1-.87 12.28a8.583 14.437 82.068 0 1-20.27 1.29a8.583 14.437 82.068 0 1 .87-12.28a8.583 14.437 82.068 0 1 11.95-3.236z"></path>
            </svg>),
        }, 
        {
            title: lang === 'en' ? '24/7 availability' : "Disponibilidad 24/7",
            text: lang === 'en' ? 'Customers can shop anytime, without time limits, generating constant income' : "Los clientes pueden comprar en cualquier momento, sin límites de horario, generando ingresos constantes.",
            svg: (<svg
                className='animate-icons w-[55px] md:w-[80px]'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g fill="currentColor">
                    <path d="M15 7v-.85l-.57.85z"></path>
                    <path d="M24.02 10.01H7.99c-.54 0-.99-.44-.99-.99V3.99c0-.54.44-.99.99-.99h16.03c.54 0 .99.44.99.99v5.03c-.01.55-.45.99-.99.99M23 4.5a.49.49 0 0 0-.49-.49h-.02a.49.49 0 0 0-.49.49v1.51h-2V4.5a.49.49 0 0 0-.49-.49h-.02a.49.49 0 0 0-.49.49v4.02c0 .27.22.49.49.49h.02c.27 0 .49-.22.49-.49v-1.5h2v1.5c0 .27.22.49.49.49h.02c.27 0 .49-.22.49-.49zM12.14 9.01c.35 0 .53-.18.53-.53S12.48 8 12.13 8h-1.39l.81-.83c.32-.31.54-.6.68-.88c.13-.27.2-.55.2-.85c0-.47-.15-.82-.45-1.07S11.24 4 10.68 4c-.23 0-.47.03-.7.08s-.45.14-.67.25c-.12.06-.21.15-.25.25c-.05.1-.07.14-.05.24q.03.15.12.27c.06.08.15.13.25.16s.22.01.34-.05a1.6 1.6 0 0 1 .76-.21c.45 0 .69.24.69.59q0 .21-.12.42c-.08.14-.21.31-.39.5L9.42 7.82c-.1.1-.17.2-.23.3s-.07.18-.07.31c0 .19.05.33.14.42c.09.1.24.14.44.14h2.44zm4.87-1.48a.473.473 0 0 0-.51-.51h-.51v-2.5l-.005-.025q-.004-.011-.005-.025c0-.03-.01-.07-.02-.1c0-.027-.009-.044-.018-.062l-.012-.028q-.012-.03-.032-.055L15.88 4.2a.2.2 0 0 0-.07-.07l-.03-.03q-.008-.006-.02-.01l-.02-.01c-.03-.02-.06-.03-.09-.04s-.06-.02-.09-.02l-.025-.005q-.011-.004-.025-.005q-.015.001-.025.005l-.025.005c-.04 0-.07.01-.1.02s-.06.02-.09.04q-.03.011-.055.032l-.025.018c-.03.02-.05.04-.07.07l-.03.03l-2.01 3l-.01.02l-.01.02c-.02.03-.03.06-.04.09s-.02.07-.02.1l-.004.013l-.006.027q0 .015.005.025L13 7.55c0 .03.01.07.02.1c0 .027.009.044.018.062l.012.028q.011.03.032.055l.018.025c.02.03.04.05.07.07l.03.03q.008.006.015.005q.008-.001.015.005c.08.04.16.07.25.07h1.51v.51c0 .29.24.52.53.5c.27-.02.47-.25.47-.52V8h.5c.27 0 .5-.2.52-.47M10 10.01h1V12h10v-1.99h1V12h7.24c.42 0 .77.34.77.77v2.47c-.01.43-.35.77-.77.77H29v12H3v-12h-.23a.77.77 0 0 1-.77-.77v-2.47c0-.42.34-.77.77-.77H10zm16.01 13.51v-3.03a.49.49 0 0 0-.49-.49h-8.03a.49.49 0 0 0-.49.49v3.03c0 .27.22.49.49.49h8.03c.26 0 .48-.22.49-.49M13 19.56c0-.3-.25-.55-.55-.55h-1.89c-.3 0-.55.25-.55.55v6.9c0 .3.25.55.55.55h1.89c.3 0 .55-.25.55-.55zm-4 0c0-.3-.25-.55-.55-.55H6.56c-.3 0-.55.25-.55.55v6.9c0 .3.25.55.55.55h1.89c.3 0 .55-.25.55-.55zM29.01 13H3v2.01h26.01z"></path>
                </g>
            </svg>),
        },
        {
            title: lang === 'en' ? 'Greater reach and sales' : "Mayor alcance y ventas",
            text: lang === 'en' ? 'A virtual store allows you to sell to customers anywhere, increasing business opportunities' : "Una tienda virtual permite vender a clientes de cualquier lugar, aumentando las oportunidades de negocio.",
            svg: (<svg
                className='animate-icons w-[55px] md:w-[80px]'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.152 9.032a2.643 2.643 0 1 0 .111-3.881c.182.32.318.669.4 1.038a1.643 1.643 0 1 1-.052 1.83a3.7 3.7 0 0 1-.459 1.013M8.737 5.15a2.643 2.643 0 1 0 .111 3.881a3.7 3.7 0 0 1-.458-1.012a1.642 1.642 0 0 1-3.033-.876a1.643 1.643 0 0 1 2.98-.954c.082-.37.218-.718.4-1.038m-4.036 5.146c-.3.08-.596.18-.891.278l-.254.084a2.63 2.63 0 0 0-1.73 1.843l-.298 2.133c-.113.816.325 1.674 1.22 1.887q.371.091.885.175a.5.5 0 1 0 .159-.988a11 11 0 0 1-.813-.16c-.303-.072-.516-.374-.46-.777l.283-2.049c.141-.52.54-1.05 1.066-1.223c.314-.103 1.094-.25 1.094-.25c.42.25.57.351.57.351a.5.5 0 0 0 .435-.9q-.152-.077-.296-.164c-.297-.176-.58-.344-.97-.24m15.489.278c-.295-.099-.59-.197-.891-.278c-.39-.104-.673.064-.97.24q-.144.087-.296.164a.5.5 0 0 0 .435.9s.15-.101.57-.351c0 0 .78.147 1.094.25c.526.173.924.703 1.066 1.223l.283 2.049c.056.403-.157.705-.46.777q-.335.082-.813.16a.5.5 0 1 0 .16.988q.512-.085.884-.175c.895-.213 1.333-1.07 1.22-1.887l-.299-2.133a2.62 2.62 0 0 0-1.73-1.843z" opacity={0.5}></path>
                <path fill="currentColor" d="M12 3.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 7a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m5.485 4.415c-.61-.173-1.187.034-1.582.297c-.36.238-.942.524-1.653.524s-1.294-.286-1.653-.524c-.396-.263-.973-.47-1.583-.297a12 12 0 0 0-.477.145l-.96.315a3.72 3.72 0 0 0-2.454 2.616l-.01.04l-.408 2.95c-.161 1.164.462 2.393 1.744 2.698c1.17.279 3.052.571 5.8.571c2.749 0 4.631-.292 5.801-.57c1.282-.306 1.906-1.535 1.744-2.698l-.408-2.95l-.01-.04a3.72 3.72 0 0 0-2.455-2.617l-.959-.315q-.237-.077-.477-.146m-.753 1.546c.174-.115.298-.117.345-.103q.21.06.417.127l.96.315c.72.237 1.264.812 1.458 1.523l.397 2.864c.075.544-.21.939-.606 1.033c-1.047.25-2.812.53-5.453.53s-4.407-.28-5.454-.53c-.395-.094-.68-.489-.606-1.033l.397-2.864A2.23 2.23 0 0 1 7.796 13.3l.96-.315q.206-.068.416-.127c.048-.014.17-.012.345.103c.501.333 1.372.775 2.483.775s1.98-.442 2.482-.775"></path>
            </svg>),
        }
    ]

    return (
        <>
        <Lighting>

        
            <Nav />
            <div className='p-4 flex relative items-center z-20 flex-col gap-3'>
            <div className='relative px-4 items-center grid grid-cols-1 gap-4 w-full pt-24'>
            <section className='flex gap-2 uppercase'>
                <h2 className='text-xl head-animation'>

                    { lang === 'en' ? 'How your business can benefit from having a' : '¿Cómo se puede beneficiar tu negocio de tener una'} <b className='text-xl md:text-2xl px-1 text-[#a78bfa]'>{ lang === 'en' ? 'virtual store' : 'tienda virtual'}</b>?
                </h2>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 px-3'>
                {ecommercebenefits.map((reason, key) => (
                    <SectionEcommerce 
                    title={reason.title}
                    text={reason.text}
                    svg={reason.svg}
                    key={key}/>
                ))}
                </section>
                <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-2xl py-4'>{lang === 'en' ? 'Our process' : 'Nuestro proceso'}</h2>
                </div>
                <section ref={ref} className={`bg-[#242424] leading-relaxed p-4 ${inView ? 'text-animation' : ''}`}>
                    
                    <p className='py-4'>{lang === 'en' ? "We'll have a meeting to discuss about your business current digital perspective and how we could get to the right solution to achieve your business goals, once the meeting is over we'll get started right away with the requirements and a business plan, with short, mid and long term goals for you to expect once we ship the solution"
                     : 'Tendremos una reunión para discutir sobre la perspectiva digital actual de su negocio y cómo podríamos llegar a la solución adecuada para lograr sus objetivos comerciales, una vez que finalice la reunión, comenzaremos de inmediato con los requisitos y un plan de negocios, con objetivos a corto, mediano y largo plazo que puede esperar una vez que enviemos la solución'}</p>
                    <hr />
                    <p className='py-4'>{lang === 'en' ? "Once the solution is shipped we'll provide close support and monitoring to ensure the goals we previously set are being met, we'll also provide a panel for you to look into your products, update stock, sale's metrics and more" :
                     'Una vez enviada la solución brindaremos soporte y monitoreo cercano para garantizar que se cumplan los objetivos que establecimos previamente, también le brindaremos un panel para que pueda revisar sus productos, actualizar el stock, las métricas de ventas y más'}</p>

                </section>
                </div>
                
                <h2 className='text-2xl py-4'>{lang === 'en' ? 'You are one step away from ' : 'Estás a un paso de '}
                    <b className='text-[#a78bfa] px-2'>
                    { lang === 'en' ? 'transforming' : 'transformar'}
                    </b>
                 {lang === 'en' ? 'your business' : 'tu negocio'}</h2>
                <button className='action' onClick={() => setShowEcommModal(true)}>{lang === 'en' ? 'Get started' : 'Comenzar'}</button>
            </div>

            {showEcommModal && (
                <div 
                    id="modalEcommOverlay" 
                    className="fixed inset-0 bg-black bg-opacity-50 h-auto overflow-y-auto p-4 flex justify-center items-center z-[555]"
                    onClick={closeModal}
                >
                    <div className="bg-[#242424] p-6 rounded-lg shadow-lg relative w-[80%] overflow-y-auto max-w-lg" onClick={(e) => e.stopPropagation()}>
                        <p className='my-2 '>{lang === 'en' ? "Fill out the information and we'll contact you to schedule a meeting. We'll discuss your needs and how to create your online store that sells" : 'Completa los datos y te contactaremos para agendar una reunión. Hablaremos de tus necesidades y de cómo crear tu tienda virtual que vende'}</p>
                   
                        <button className="absolute cursor-pointer top-2 right-2 text-[#a78bfa] hover:text-gray-700" onClick={() => setShowEcommModal(false)}>
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
    );
};



export default LayoutStores;
