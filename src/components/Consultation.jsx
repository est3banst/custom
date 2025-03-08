import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Consultation = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        negocio: "",
        correo: "",
        telefono: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://g5iy9do8a3.execute-api.sa-east-1.amazonaws.com/dev/client', 
                {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client : formData})
                }
            )
            const data = await response.json();

            if (data.success) {
                alert("Datos enviados correctamente");
                window.location.href = '/';
            } else {
                alert("Error: "+data.message)
            }
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Nav />
            <div className='container-conic flex'>
                <div className='flex flex-col'>
                    <section className='flex flex-col pt-24 relative bg-[rgba(36,36,36,0.22)] m-auto backdrop-blur-xs w-screen h-auto items-center'>
                        <article className='p-4 leading-relaxed flex max-w-3xl flex-col gap-2'>
                            <h2 className='text-xl'>Déjanos tus datos y nos comunicaremos dentro de 3 días hábiles</h2>
                            <p>Hablaremos sobre tu negocio, sus necesidades y cómo podemos lograr la <b>solución perfecta</b> para vos y así mejorar tus procesos de trabajo</p>
                            <small className='flex justify-center w-full'>Horario: 9:00 a 17:00 (GMT-3)</small>
                        </article> 
                        <form className='bg-[#17171712] backdrop-blur-sm w-full max-w-2xl p-6' onSubmit={handleData}>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="nombre">Tu nombre:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="negocio">Nombre de tu negocio:</label>
                                <input className='border-[#a78bfa] border p-1' type="text" required id="negocio" name="negocio" value={formData.negocio} onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="correo">Dirección de correo:</label>
                                <input className='border-[#a78bfa] border p-1' type="email" required id="correo" name="correo" value={formData.correo} onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col gap-2 my-2'>
                                <label htmlFor="telefono">Número de teléfono:</label>
                                <input className='border-[#a78bfa] border p-1' type="tel" required id="telefono" name="telefono" value={formData.telefono} onChange={handleChange}/>
                            </div>
                            <button type="submit" className='w-max cursor-pointer hover:opacity-70 my-4 border border-[#a78bfa] mx-auto p-4'>Enviar datos</button>
                        </form>
                    </section>
                    <section className='relative w-full text-center p-2 underline'>
                        <Link to={'/'}>Volver</Link>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Consultation;
