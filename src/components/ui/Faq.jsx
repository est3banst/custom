import { useState } from "react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
import AccordionComp from "../blueprints/AccordionComp";
import useScrollTop from '../hooks/useScrollTop'
import { useLanguage } from "../../config/LanguageContext";

const Faq = () => {
    const {lang} = useLanguage();
    useScrollTop();
    const questions = [
        {
            question: lang === 'en' ? 'What makes this web development service different?' : "Qué hace que este servicio de desarrollo web sea diferente?",
            answ: lang === 'en' 
            ? "We specialize in developing custom websites that combine cutting-edge technology with data-driven strategies. Our focus is on creating high-performance, responsive web designs that drive real business growth. Whether it's website design for the healthcare sector, law firms, or consulting groups, each solution is built with clean code, fast loading times, and strategic patterns that maximize conversions"
             : "Especializados en el desarrollo de sitios web personalizados que combinan tecnología de vanguardia con estrategias basadas en datos. Nuestro enfoque está en crear diseños web de alto rendimiento y responsivos que impulsen un crecimiento empresarial real. Ya sea diseño de sitios web para el sector de la salud o diseño de sitios web para firmas de abogados o grupos de consultoría, cada solución se construye con código limpio, tiempos de carga rápidos y patrones estratégicos que maximizan las conversiones."
        },
        {
            question: lang === 'en' ? 'How long does it take to create a web application or website?' : "Cuánto tiempo lleva la creación de la aplicación web o página?",
            answ: lang === 'en' ? 'Project timelines vary depending on scope and complexity. Basic website design services typically take 2 to 4 weeks, while more comprehensive solutions can take 1 to 3 months. During our initial assessment phase, we provide a detailed timeline tailored to your specific needs and objectives' : "Los plazos de los proyectos varían según el alcance y la complejidad. Los servicios básicos de diseño de sitios web suelen tomar de 2 a 4 semanas, mientras que las soluciones más completas pueden tomar de 1 a 3 meses. Durante nuestra fase de relevamiento, proporcionamos un cronograma detallado adaptado a sus necesidades y objetivos específicos."
        },
        {
            question: lang === 'en' ? 'What types of businesses do we work with?' : "Con qué tipos de negocios trabajamos ?",
            answ: lang === 'en' ? 'As a web development company, we work with various industries, including law firms, gyms, consulting groups, healthcare service providers, and e-commerce businesses. We specialize in designing websites for medical practices, developing custom websites, and creating high-converting page designs that deliver results' : "Como empresa de desarrollo web, trabajamos con diversas industrias, incluyendo firmas de abogados, gimnasios, grupos de consultoría ,proveedores de servicios de salud y negocios de comercio electrónico. Expertos en el diseño de sitios web para consultorios médicos, desarrollo de sitios web personalizados y creación de diseños de páginas de alta conversión que generan resultados."
        },
        {
            question: lang === 'en' ? 'Do we provide ongoing support and maintenance?' : "Proveemos soporte/atención sobre la marcha?",
            answ: lang === 'en' ? 'Yes, all services include continuous support and maintenance tailored to your budget. A basic support plan includes monitoring and security updates, while a premium support plan includes regular check-ins, dedicated weekly development hours, optimizations, and same-day response times' : "Si, todos los servicios incluyen soporte y atención continua que se adaptan a tus presupuestos, un plan de soporte básico consiste en monitoreo y actualizaciones de seguridad mientras que un plan de soporte premium incluye un seguimiento periódico, horas semanales dedicadas de desarrollo, optimizaciones y tiempos de respuesta en el día."
        },
        {
            question: lang === 'en' ? 'Can you work with my existing website?' : "Pueden trabajar con mi sitio web actual ?",
            answ: lang === 'en' ? 'Yes, our Web Support and Optimization service includes redesigning, performance improvement, adding or modifying functionalities, or a complete design transformation while maintaining the same content and SEO value. We will audit your current site and recommend the most responsive design approach to help you achieve your goals' : "Si, nuestro servicio de Soporte y Optimización Web incluye el rediseñado, mejora de rendimiento, agregar o modificar funcionalidades o una transformación completa de el diseño del sitio manteniendo el mismo contenido y valor de SEO. Auditaremos tu sitio actual y te recomendamos el enfoque más responsivo de diseño para que logres tus objetivos."
        },
    ];
    const [active, setActive] = useState(null);

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <>
        <div className="flex flex-col justify-between h-screen">
            <Nav />
            <div className="pt-20 rounded-2xl w-full mx-auto px-4">
               <div className="py-4">
               <h2 className="text-3xl uppercase font-bold text-[#a78bfa] p-4">{lang === 'en' ? 'Frequent' : 'Preguntas'}
                    </h2>
                    <h2 className="text-3xl uppercase font-bold px-4">{lang === 'en' ? 'questions' : 'Frecuentes'}</h2>
              
                </div> 
                 <div className="py-8 mt-4">
                    {questions.map((question, index) => (
                        <AccordionComp
                            key={index}
                            que={question.question}
                            answ={question.answ}
                            idn={index + 1}
                            active={active}
                            handleToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
            <Footer />

        </div>
        </>
    );
};

export default Faq;
