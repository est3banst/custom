import React from "react";
import Card from "./Card";

const services = [
  {
    name: "Diseño y alojamiento de tu sitio web",
    attr: "Expande tu marca hacia el mundo digital, maximiza el alcance de tu negocio", 
    price: 'Desde: $99',
    value: 'Diseños atractivos y funcionales',
    valuetwo: 'Enfoque en resultados',
    valuet: 'Rápidos y adaptables',
  },
  {
    name: "Diseño e implementación de tienda virtual",
    attr: "Tus clientes podrán comprar en tu tienda a cualquier hora del día, cualquier día del año",
    price: 'Desde: $500',
    value: 'Integración completa',
    valuetwo: 'Optimizadas para ventas',
    valuet: 'Tiendas personalizadas y escalables'
  },
  {
    name: "Diseño e implementación de sistemas de administración",
    attr: "Administra y gestiona todos los movimientos de tu negocio en un solo lugar",
    price: 'Desde: $500',
    value: 'Integración completa',
    valuetwo: 'Funcionalidades personalizadas',
    valuet: 'Diseños personalizados'
  },
  {
    name: "Soporte técnico especializado en la web",
    attr: "Tienes un sistema implementado y estás cansado de problemas sin resolver, nosotros nos encargamos",
    value: 'Respuesta inmediata',
    valuetwo: 'Asesoría y optimización',
    valuet: 'Soporte técnico integral'
  },
];

const Services = () => {
  return (
    <>
    <div className="folded-rectangle mt-18 md:mt-8">

    </div>
    <div className="flex justify-center gap-3">
    <div className="grid grid-cols-1 md:grid-cols-2 relative lg:grid-cols-3 gap-6 p-4">
      {services.map((service, index) => (
        <Card key={index} 
            name={service.name} 
            attr={service.attr} 
            price={service.price}
            value={service.value}
            valuetwo={service.valuetwo}
            valuet={service.valuet} />
      ))}
    </div>
    </div>
    </>
  );
};

export default Services;