import React from 'react'
import { useLanguage } from '../../config/LanguageContext';

const Landings = () => {
  const {lang} = useLanguage();
    const NAV_HEIGHT = 110;
    const values = [
        {
          title: lang === 'en' ? "Visibility and Reach" : "Visibilidad y Alcance",
          text: lang === 'en' ? 'A website allows your business to be visible anywhere, 24 hours a day. This expands your market and helps you reach more potential customers' : "Un sitio web permite que tu negocio sea visible en cualquier parte, las 24 horas del día. Esto amplía tu mercado y te ayuda a llegar a más clientes potenciales",
          
        },
        {
          title: lang === 'en' ? 'Credibility and Trust' : "Credibilidad y Confianza",
          text: lang === 'en' ? 'Having a professional website generates trust with your customers. Most consumers expect a legitimate business to have an online presence' : "Tener un sitio web profesional genera confianza en tus clientes. La mayoría de los consumidores esperan que un negocio legítimo tenga presencia en línea",
      
        },
        {
          title: lang === 'en' ? 'Effective Marketing and Promotion' : "Marketing y Promoción Efectiva",
          text: lang === 'en' ? 'You can promote your products or services in a more cost-effective and efficient way through digital marketing strategies like SEO, social media advertising, or content marketing' : "Puedes promocionar tus productos o servicios de manera más económica y efectiva mediante estrategias de marketing digital como SEO, publicidad en redes sociales o marketing de contenido",
        
        },
        {
          title: lang === 'en' ? 'Availability and Customer Support' : "Disponibilidad y Atención al Cliente",
          text: lang === 'en' ? 'A website allows your customers to get information about your products or services at any time. Additionally, you can offer support through live chat, contact forms, or FAQ sections' : "Un sitio web permite a tus clientes obtener información sobre tus productos o servicios en cualquier momento. Además puedes ofrecer soporte mediante chat en vivo, formularios de contacto o secciones de preguntas frecuentes",
         
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