import React from "react";
import GridHero from "./GridHero";

const Hero = () => {
  return (
    <div id="hero-container" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <GridHero />
      <div className="relative cust-background z-20 text-center h-screen flex flex-col justify-center items-center gap-5 p-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight uppercase p-4 ">
          Impulsamos tu negocio con soluciones web innovadoras. Ubicados en Uruguay, trabajamos para todo el mundo.
        </h2>
        <a href="" className="action">Más info.
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
