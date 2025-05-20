import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { API_CLIENTE } from '../apiroutes/client';
import { useLanguage } from '../config/LanguageContext';
import Footer from './Footer';

const Consultation = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        negocio: "",
        correo: "",
        telefono: ""
    });

    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { lang } = useLanguage();
    const setMessageVisibility = () => {
        setShowMessage(!showMessage)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleData = async (e) => {

        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch(API_CLIENTE,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ client: formData })
                }
            )
            const data = await response.json();

            if (data.success) {
                setFormData({ nombre: "", negocio: "", correo: "", telefono: "" });
                setMessageVisibility()
            } else {
                alert("Error: " + data.message)
            }

        } catch (error) {
            console.error("Error:", error);
        }
        finally {
            setIsSubmitting(false);
        }

    };

    return (
        <>
            <Nav />
            <div className='flex relative'>

                <div className='supp-bg flex flex-col'>
                    
                    <section className='flex flex-col pt-24 relative bg-[rgba(36,36,36,0.22)] m-auto backdrop-blur-xs w-screen h-auto items-center'>
                        
                        <article className='w-full px-2 py-8 my-4 justify-center flex flex-col items-center gap-1'>
                            <h2 className='font-black text-2xl'>{lang === 'en' ? "If you are ready to start growing your digital brand we are here to help you all the way up" : "Si estás listo para comenzar a crecer tu marca digital estamos acá para ayudarte durante todo el proceso"} </h2>
                            <p className='px-2 text-[9px]'>{lang === 'en' ? "If you have any questions or queries, please leave us an email and we will respond as quickly as possible" : "Si tenes alguna duda o tenes una consulta por favor dejanos un mail que responderemos lo más rapido posible"}</p>

                          <a href='mailto:info@kustomdev.com' className='flex gap-2 items-center'>
                          
                            <small className='text-center underline font-medium'>info@kustomdev.com</small>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9.06 8.683L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513z"></path>
                            </svg>
                            </a>
                             </article>

                        <article className='py-6 px-4 bg-[#2424246e] leading-relaxed flex w-full items-center flex-col gap-2'>
                            <h2 className='text-xl'>{lang === 'en' ? "Leave us your details, and we will contact you within 3 business days" : 'Déjanos tus datos y nos comunicaremos dentro de 3 días hábiles'}</h2>
                            <p>{lang === 'en' ? 'We will talk about your business, its needs, and how we can achieve the' : 'Hablaremos sobre tu negocio, sus necesidades y cómo podemos lograr la'} <b>{lang === 'en' ? 'perfect solution' : 'solución perfecta'}</b> {lang === 'en' ? 'for you to improve your work processes' : 'para vos y así mejorar tus procesos de trabajo'}</p>
                            <small className='flex justify-center w-full'>{lang === 'en' ? "Hours: 9:00 AM to 5:00 PM" : 'Horario: 9:00 a 17:00'} (GMT-3)</small>
                        </article>

                        <form className='bg-[#17171712] backdrop-blur-sm w-full max-w-2xl p-6' onSubmit={handleData}>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="nombre">{lang === 'en' ? 'Name' : 'Tu nombre'}:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="negocio">{lang === 'en' ? 'Business name' : 'Nombre de tu negocio'}:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="negocio" name="negocio" value={formData.negocio} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="correo">{lang === 'en' ? 'Email' : "Dirección de correo"}:</label>
                                <input className='border-[#a78bfa] border p-1' type="email" required id="correo" name="correo" value={formData.correo} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="telefono">{lang === 'en' ? 'Phone' : 'Número de teléfono'}:</label>
                                <input className='border-[#a78bfa] border p-1' type="tel" required id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </div>


                            <button type="submit" className='w-max cursor-pointer hover:opacity-70 my-4 border border-[#a78bfa] mx-auto p-4' disabled={isSubmitting}
                            >
                                {isSubmitting ?
                                    (lang === 'en' ? 'Sending...' : "Enviando...")
                                    : (lang === 'en' ? 'Send data' : "Enviar datos")}</button>
                        </form>
                        {showMessage && (
                            <span className='flex rounded-xl items-center justify-center relative gap-2 bg-[#6eab8cc5] p-4 text-base'>
                                {lang === 'en' ? "Data sent, we'll get back to you" : 'Datos enviados, nos comunicaremos contigo'}
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 50 50">
                                    <path fill="#1dc742" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                                    <path fill="#1dc742" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                                </svg>

                                <div
                                    className='absolute left-0 top-0 bg-[#d0d0d0ac] text-black w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer text-xs'
                                    onClick={() => setShowMessage(false)}
                                >
                                    ✕
                                </div>
                            </span>
                        )}
                    </section>
                    <section className='relative w-full flex items-center gap-4 justify-center text-center pb-12 pt-2 underline'>
         
       <Link className='flex items-center gap-4' to={'/'}>{lang === 'en' ? 'Go back' : 'Volver'}
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24">
	<path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"></path>
</svg>
        </Link>
                   
                    </section>
                    
                </div>
                  
            </div>

            <Footer />
        </>
    );
};

export default Consultation;
