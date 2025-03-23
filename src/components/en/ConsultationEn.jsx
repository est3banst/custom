import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavEn from './NavEn'
import { API_CLIENTE } from '../../apiroutes/client';

const ConsultationEn = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        negocio: "",
        correo: "",
        telefono: ""
    });

    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            <NavEn />
            <div className='container-conic flex'>
                <div className='flex flex-col'>
                    <section className='flex flex-col pt-24 relative bg-[rgba(36,36,36,0.22)] m-auto backdrop-blur-xs w-screen h-auto items-center'>
                        <article className='p-4 leading-relaxed flex max-w-3xl flex-col gap-2'>
                            <h2 className='text-xl'>Leave us your details, and we will contact you within 3 business days</h2>
                            <p>We will talk about your business, its needs, and how we can achieve the <b>perfect solution</b> for you to improve your work processes.</p>
                            <small className='flex justify-center w-full'>Hours: 9:00 AM to 5:00 PM (GMT-3)</small>
                        </article>

                        <form className='bg-[#17171712] backdrop-blur-sm w-full max-w-2xl p-6' onSubmit={handleData}>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="nombre">Full name:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="negocio">Business name:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="negocio" name="negocio" value={formData.negocio} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="correo">Email:</label>
                                <input className='border-[#a78bfa] border p-1' type="email" required id="correo" name="correo" value={formData.correo} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="telefono">Phone:</label>
                                <input className='border-[#a78bfa] border p-1' type="tel" required id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </div>


                            <button type="submit" className='w-max cursor-pointer hover:opacity-70 my-4 border border-[#a78bfa] mx-auto p-4' disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send data"}</button>
                        </form>
                        {showMessage && (
                            <span className='flex rounded-xl items-center justify-center relative gap-2 bg-[#6eab8cc5] p-4 text-base'>
                                Data sent, we'll get back to you
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
                    <section className='relative w-full text-center p-2 underline'>
                        <Link to={'/en'}>Get back</Link>
                    </section>
                </div>
            </div>


        </>
    );
};

export default ConsultationEn;
