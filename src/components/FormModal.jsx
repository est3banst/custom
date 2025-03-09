import React, { useState } from 'react'


const Ecomm = () => {
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
    const sendData = async (e) => {

        e.preventDefault();
        setIsSubmitting(true)
        try {
            const response = await fetch('https://g5iy9do8a3.execute-api.sa-east-1.amazonaws.com/dev/client',
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
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className='w-full relative'>
                <div className='flex flex-col w-full relative gap-3 px-auto'>

                    <form
                        className='max-w-xl space-y-3'
                        action=""
                        onSubmit={sendData}>
                        <div className='flex gap-1 p-2  flex-col'>
                            <label htmlFor="name">Nombre:</label>
                            <input className="border rounded-xs p-1 border-[#a78bfa]" type="text" name="nombre" onChange={handleChange} value={formData.nombre} id="name" />
                        </div>
                        <div className='flex gap-1 p-2  flex-col'>
                            <label htmlFor="correo">Correo electrónico:</label>
                            <input className="border rounded-xs p-1 border-[#a78bfa]" name="correo" id="correo" onChange={handleChange} value={formData.correo} type="text" />
                        </div>
                        <div className='flex gap-1 p-2 flex-col'>
                            <label htmlFor="negocio">Nombre de tu negocio:</label>
                            <input type="text" className='border rounded-xs p-1 border-[#a78bfa]' name="negocio" id="negocio" onChange={handleChange} value={formData.negocio} />
                        </div>
                        <div className='flex gap-1 p-2  flex-col'>
                            <label htmlFor="telefono">Número de contacto:</label>
                            <input className="border rounded-xs p-1 border-[#a78bfa]" onChange={handleChange} name="telefono" id="telefono" type="text" value={formData.telefono} />
                        </div>
                        <div className='flex w-full'>

                        <button 
                                className='action' 
                                type="submit" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar datos"}
                            </button>
                        </div>
                    </form>
                   
                </div>
                {showMessage && (
                <span className='flex items-center justify-center relative gap-2 bg-[#6eab8cc5] p-3 text-sm z-[9892]'>
                    Datos enviados, nos comunicaremos contigo
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 50 50">
                        <path fill="#1dc742" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path>
                        <path fill="#1dc742" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"></path>
                    </svg>

                    <div 
                        className='absolute -left-3.5 -top-3.5 bg-[#d0d0d0ac] text-black w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer text-xs' 
                        onClick={() => setShowMessage(false)}
                    >
                        ✕
                    </div>
                </span>
            )}
            </div>
           

        </>
    )
}

export default Ecomm

const vals = [
    {
        title: '',
        text: ''
    },
    {
        title: '',
        text: ''
    },
    {
        title: '',
        text: ''
    },

]