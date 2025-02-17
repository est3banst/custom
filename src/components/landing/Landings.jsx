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
    <div className="relative flex flex-col md:flex-row px-4 pt-20 pb-12 sm:px-6 lg:px-8" style={{ minHeight: '300vh' }}>
      <div className="flex-1 text-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="sticky w-full max-w-xl px-8 py-12 mt-8 mx-auto space-y-4 border rounded-lg bg-[#171717]"
            style={{ top: `calc(5.5rem * ${index + 1})`,
                    zIndex: `calc(5 + ${index + 1})` }}
          >
            <h2 className="space-y-1 text-2xl font-bold leading-none text-slate-50">
              <span className="block text-sm">{value.title}</span>
            </h2>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}

export default Landings