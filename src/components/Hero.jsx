import React from "react";
import GridHero from "./GridHero";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref: freeBtn, inView: isBtnInView } = useInView({
    threshold: 0.1
  })

  return (
    <div id="hero-container" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <GridHero />
      <div className="relative cust-background z-20 text-center h-screen flex flex-col justify-center items-center gap-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light uppercase p-4 ">
          Impulsamos tu negocio con soluciones web innovadoras. Ubicados en Uruguay, trabajamos para todo el mundo.
        </h2>
       <div className="flex w-full md:w-4/6 justify-center gap-5 flex-col md:flex-row items-center">
       <span className="">
        <Link to="/services">
       <button className="action">Más info.
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"/></svg>
        </button>
        </Link>
       </span>
       <div ref={freeBtn} className={`outbutton -translate-y-12 opacity-0 transition-all my-2 duration-[1200ms] ease-in-out ${isBtnInView ? 'translate-y-0 opacity-100' : ''}`}>
        <button className="corner-button text-base font-bold bg-[#00000004] backdrop-blur-[2px]">
            <span>Solicitar auditoría gratis</span>
        </button>
    </div>

       </div>

      </div>
    </div>
  );
};

export default Hero;
