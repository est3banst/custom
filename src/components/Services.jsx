import React from "react";
import Card from "./Card";
import { useInView } from "react-intersection-observer";

const Services = () => {
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
        valuetwo={service.valuetwo}
        valuet={service.valuet}
        link={service.link}
      />
    </div>
  );
};

export default Services;

const services = [
  {
    name: "Diseño y alojamiento de tu sitio web",
    attr: "Expande tu marca hacia el mundo digital, maximiza el alcance de tu negocio",
    price: "Desde: USD 99/Anual",
    value: "Diseños atractivos y funcionales",
    valuetwo: "Enfoque en resultados",
    valuet: "Rápidos y adaptables",
    link: "/services/spa-service"
  },
  {
    name: "Diseño e implementación de tienda virtual",
    attr: "Tus clientes podrán comprar en tu tienda a cualquier hora del día, cualquier día del año",
    price: "Desde: USD 800/Anual",
    value: "Integración completa",
    valuetwo: "Optimizadas para ventas",
    valuet: "Tiendas personalizadas y escalables",
    link: "/services/ecommerce"
  },
  {
    name: "Diseño e implementación de sistemas de administración",
    attr: "Administra y gestiona todos los movimientos de tu negocio en un solo lugar",
    price: "Desde: USD 500/Anual",
    value: "Integración completa",
    valuetwo: "Funcionalidades personalizadas",
    valuet: "Diseños personalizados",
    link: "/services/crm"
  },
  {
    name: "Soporte técnico especializado en la web",
    attr: "Tienes un sistema implementado y estás cansado de problemas sin resolver, nosotros nos encargamos",
    value: "Respuesta inmediata",
    valuetwo: "Asesoría y optimización",
    valuet: "Soporte técnico integral",
    link: "/services/support-service"
  },
];
