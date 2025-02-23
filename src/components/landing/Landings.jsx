import React from 'react'

const Landings = () => {
    const NAV_HEIGHT = 110;
    const values = [
        {
          title: "Visibilidad y Alcance",
          text: "Un sitio web permite que tu negocio sea visible en cualquier parte, las 24 horas del día. Esto amplía tu mercado y te ayuda a llegar a más clientes potenciales.",
          
        },
        {
          title: "Credibilidad y Confianza",
          text: "Tener un sitio web profesional genera confianza en tus clientes. La mayoría de los consumidores esperan que un negocio legítimo tenga presencia en línea.",
      
        },
        {
          title: "Marketing y Promoción Efectiva",
          text: "Puedes promocionar tus productos o servicios de manera más económica y efectiva mediante estrategias de marketing digital como SEO, publicidad en redes sociales o marketing de contenido.",
        
        },
        {
          title: "Disponibilidad y Atención al Cliente",
          text: "Un sitio web permite a tus clientes obtener información sobre tus productos o servicios en cualquier momento. Además puedes ofrecer soporte mediante chat en vivo, formularios de contacto o secciones de preguntas frecuentes.",
         
        }
      ];
    return (
        <>
    <div className="relative flex flex-col mb-12 md:mb-100 md:flex-row px-2 sm:px-4 lg:px-8">
      <div className="scroll-cards">
        {values.map((value, index) => (
            
          <div
            key={index}
            style={{
                zIndex: `calc(5 * ${index + 1})`
            }}
            className=
            {`scroll-cards__item bg-[#171717]`}
         
          >
            <h2 className="text-base uppercase md:text-xl lg:text-2xl pb-4 font-bold leading-none text-slate-50">
              <span className="block py-2">{value.title}</span>
            </h2>
            <p className='text-left text-xl md:text-2xl'>{value.text}</p>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}

export default Landings