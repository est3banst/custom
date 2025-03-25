import React from "react";
import Card from "../Card";
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
        en="english"
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
    name: "Design and hosting of your website",
    attr: "Expand your brand into the digital world, maximize your business reach",
    price: "Starting at: USD 99/Year",
    value: "Attractive and functional designs",
    valuetwo: "Focus on results",
    valuet: "Fast and adaptable",
    link: "/en/services/spa-service"
  },
  {
    name: "Design and implementation of virtual store",
    attr: "Your customers will be able to shop in your store at any time of day, any day of the year",
    price: "Starting at: USD 99/Month",
    value: "Complete integrations",
    valuetwo: "Optimized for sales",
    valuet: "Custom and scalable stores",
    link: "/en/services/ecommerce"
  },
  {
    name: "Design and implementation of management systems",
    attr: "Manage and manage all your business transactions in one place",
    price: "Starting at: USD 89/Month",
    value: "Complete integrations",
    valuetwo: "Custom features",
    valuet: "Custom designs",
    link: "/en/services/crm"
  },
  {
    name: "Technical support specialized in the web",
    attr: "You have a system in place and you are tired of unresolved issues, we will take care of it.",
    value: "Immediate response",
    valuetwo: "Consulting and optimization",
    valuet: "Complete technical support",
    link: "/en/services/support-service"
  },
];
