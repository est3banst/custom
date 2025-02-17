import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import AccordionComp from "./AccordionComp";

const questions = [
    {
        question: "Qué hace que este servicio de desarrollo web sea diferente?",
        answ: "Especializados en el desarrollo de sitios web personalizados que combinan tecnología de vanguardia con estrategias basadas en datos. Nuestro enfoque está en crear diseños web de alto rendimiento y responsivos que impulsen un crecimiento empresarial real. Ya sea diseño de sitios web para el sector de la salud o diseño de sitios web para bufetes de abogados, cada solución se construye con código limpio, tiempos de carga rápidos y patrones estratégicos que maximizan las conversiones."
    },
    {
        question: "Cuánto tiempo lleva la creación de la aplicación web o página?",
        answ: "Los plazos de los proyectos varían según el alcance y la complejidad. Los servicios básicos de diseño de sitios web suelen tomar de 2 a 4 semanas, mientras que las soluciones más completas pueden tomar de 1 a 3 meses. Durante nuestra fase de relevamiento, proporcionamos un cronograma detallado adaptado a sus necesidades y objetivos específicos."
    },
    {
        question: "Con qué tipos de negocios trabajamos ?",
        answ: "Como empresa de desarrollo web, trabajamos con diversas industrias, incluyendo firmas de abogados, proveedores de servicios de salud y negocios de comercio electrónico. Expertos en el diseño de sitios web para consultorios médicos, desarrollo de sitios web personalizados y creación de diseños de páginas de alta conversión que generan resultados."
    },
    {
        question: "Proveemos soporte/atención sobre la marcha?",
        answ: "Si, todos los servicios incluyen soporte y atención continua que se adaptan a tus presupuestos, un plan de soporte básico consiste en monitoreo y actualizaciones de seguridad mientras que un plan de soporte premium incluye un seguimiento periódico, horas semanales dedicadas de desarrollo, optimizaciones y tiempos de respuesta en el día."
    }
];

const Faq = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <>
        <div className="flex flex-col justify-between h-screen">
            <Nav />
            <div className="pt-20 rounded-2xl w-5/6 mx-auto px-4">
                <h2 className="text-3xl font-bold p-4">Preguntas frecuentes</h2>
                <div className="mt-4">
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
