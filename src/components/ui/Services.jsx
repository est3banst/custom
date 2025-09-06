import React from "react";
import Card from "../blueprints/Card";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../config/LanguageContext";

const Services = () => {
  const { lang } = useLanguage();

  const services = [
    {
      name: lang === 'en' ? "Design and hosting of your website" : "Diseño y alojamiento de tu sitio web",
      attr: lang === 'en' ? "Expand your brand into the digital world, maximize your business reach" : "Expande tu marca hacia el mundo digital, maximiza el alcance de tu negocio",
      price: lang === 'en' ? "Starting at: USD 99/Year" : "Desde: USD 99/Anual", 
      value: lang === 'en' ? "Attractive and responsive designs" : "Diseños atractivos y responsivos",
      valuex: lang === 'en' ? "SEO Optimization" : "Optimización SEO",
      valuez: lang === 'en' ? "Corporate email (up to 5 accounts with starter plan)" : "Correo electrónico corporativo (hasta 5 cuentas con el plan inicial)",
      valuey: lang === 'en' ? "Hosting and SSL Certificate" : "Certificado SSL y Alojamiento",
      valuetwo: lang === 'en' ? "Focus on results" : "Enfoque en resultados",
      valuet: lang === 'en' ? "Technical support" : "Soporte técnico",
      link: "/services/spa-service"
    },
    {
      name: lang === 'en' ? "Design and implementation of virtual store" : "Diseño e implementación de tienda virtual",
      attr: lang === 'en' ? "Your customers will be able to shop in your store at any time of day, any day of the year" : "Tus clientes podrán comprar en tu tienda a cualquier hora del día, cualquier día del año",
      price: lang === 'en' ? "Starting at: USD 99/Month" : "Desde: USD 99/Mes",
      value: lang === 'en' ? "Complete integrations" : "Integración completa",
      valuex: lang === 'en' ? "Payment gateways" : "Pasarelas de pago",
      valuez: lang === 'en' ? "Inventory management" : "Gestión de inventario",
      valuey: lang === 'en' ? "No products limit" : "Sin límite de productos",
      valuet: lang === 'en' ? "Optimized for sales" : "Optimizadas para ventas",
      valuetwo: lang === 'en' ? "Custom and scalable stores" : "Tiendas personalizadas y escalables",
      link: "/services/ecommerce"
    },
    {
      name: lang === 'en' ? "Technical support specialized in the web" : "Soporte técnico especializado en la web",
      attr: lang === 'en' ? "You have a system in place and you are tired of unresolved issues, we will take care of it." : "Tienes un sistema implementado y estás cansado de problemas sin resolver, nosotros nos encargamos",
      valuey: lang === 'en' ? "Immediate response" : "Respuesta inmediata",
      valuex: lang === 'en' ? "Custom solutions" : "Soluciones personalizadas",
      valuetwo: lang === 'en' ? "No limit of tickets" : "Sin límite de tickets",
      valuet: lang === 'en' ? "No limit of hours" : "Sin límite de horas",
      valuez: lang === 'en' ? "Consulting and optimization" : "Asesoría y optimización",
      value: lang === 'en' ? "Complete technical support" : "Soporte técnico integral",
      link: "/services/support-service"
    },
  ];
  return (
    <>
    <div className="relative my-12 lg:my-14">
    <div className="folded-rectangle"></div>
      <div className="flex justify-center gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
      
    </>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 -translate-y-15 -rotate-3 transition-all duration-500 ease-in-out my-4 ${
        inView ? "opacity-100 translate-y-0 rotate-0" : ""
      }`}
      style={{ transitionDelay: `${index * 190}ms` }} 
    >
      <Card
        name={service.name}
        attr={service.attr}
        price={service.price}
        value={service.value}
        valuex={service.valuex}
        valuez={service.valuez} 
        valuey={service.valuey}
        valuetwo={service.valuetwo}
        valuet={service.valuet}
        link={service.link}
      />
    </div>
  );
};

export default Services;


