import React from "react";
import Card from "./Card";
import { useInView } from "react-intersection-observer";

const Services = () => {
  return (
    <>
      <div className="folded-rectangle mt-18 md:mt-8"></div>
      <div className="flex justify-center gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-10 transition-all duration-500 ease-in-out mb-4 ${
        inView ? "opacity-100 translate-y-0" : ""
      }`}
      style={{ transitionDelay: `${index * 150}ms` }} 
    >
      <Card
        name={service.name}
        attr={service.attr}
        price={service.price}
        value={service.value}
        valuetwo={service.valuetwo}
        valuet={service.valuet}
      />
    </div>
  );
};

export default Services;

const services = [
  {
    name: "Diseño y alojamiento de tu sitio web",
    attr: "Expande tu marca hacia el mundo digital, maximiza el alcance de tu negocio",
    price: "Desde: $99",
    value: "Diseños atractivos y funcionales",
    valuetwo: "Enfoque en resultados",
    valuet: "Rápidos y adaptables",
  },
  {
    name: "Diseño e implementación de tienda virtual",
    attr: "Tus clientes podrán comprar en tu tienda a cualquier hora del día, cualquier día del año",
    price: "Desde: $500",
    value: "Integración completa",
    valuetwo: "Optimizadas para ventas",
    valuet: "Tiendas personalizadas y escalables",
  },
  {
    name: "Diseño e implementación de sistemas de administración",
    attr: "Administra y gestiona todos los movimientos de tu negocio en un solo lugar",
    price: "Desde: $500",
    value: "Integración completa",
    valuetwo: "Funcionalidades personalizadas",
    valuet: "Diseños personalizados",
  },
  {
    name: "Soporte técnico especializado en la web",
    attr: "Tienes un sistema implementado y estás cansado de problemas sin resolver, nosotros nos encargamos",
    value: "Respuesta inmediata",
    valuetwo: "Asesoría y optimización",
    valuet: "Soporte técnico integral",
  },
];
