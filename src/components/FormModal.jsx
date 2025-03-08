import React, {useState } from 'react'


const Ecomm = () => {
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
    const sendData = async (e) => {

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
                location.reload();
            } else {
                alert("Error: "+data.message)
            }
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <>
    <div className='w-full'>
    <div className='flex flex-col w-full gap-3 px-auto'>
        
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

            <button className='action'>Enviar datos</button>
            </div>
        </form>

    </div>
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