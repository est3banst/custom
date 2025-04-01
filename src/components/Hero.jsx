import React from "react";
import GridHero from "./GridHero";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useLanguage } from "../config/LanguageContext";

const Hero = () => {

  const { lang } = useLanguage();
  const { ref: freeBtn, inView: isBtnInView } = useInView({
    threshold: 0.1
  })

  return (
    <div id="hero-container" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <GridHero />
      <div className="relative cust-background z-20 text-center h-screen flex flex-col justify-center items-center gap-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium uppercase p-4 ">
       {   lang === 'en' ?
         'We boost your business with innovative web solutions. Based in Uruguay, we work worldwide' :
          'Impulsamos tu negocio con soluciones web innovadoras. Ubicados en Uruguay, trabajamos para todo el mundo'
       } </h2>
       <div className="flex w-full md:w-4/6 justify-center gap-5 flex-col md:flex-row items-center">
       <span className="">
        <Link to='/services'>
       <button className="action">{ lang === 'en' ? 'See more' : 'Ver más'}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"/></svg>
        </button>
        </Link>
       </span>
       <div ref={freeBtn} className={`outbutton -translate-y-12 opacity-0 transition-all my-2 duration-[1200ms] ease-in-out ${isBtnInView ? 'translate-y-0 opacity-100' : ''}`}>
        <Link target="_blank" to="/free-consultation">
        <button className="corner-button text-base font-bold bg-[#00000004] backdrop-blur-[2px]">
            <span>{ lang === 'en' ? 'Free consultation' : 'Solicitar auditoría gratis'}</span>
        </button>
        </Link>
        <span className={`absolute bottom-0 translate-y-5 font-black right-0 text-[#a78bfa] ${isBtnInView ? 'arrow-animation' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 100 100">
	<path fill="currentColor" d="M14.291 2.346a5 5 0 0 0-2.477 4.944l7.556 81.087c.483 3.937 5.139 5.772 8.177 3.222l14.215-11.93l7.15 12.385c4.112 7.121 12.37 7.87 19.49 3.758c7.123-4.112 10.603-11.637 6.491-18.758l-7.125-12.341l17.164-6.245c3.727-1.357 4.466-6.305 1.298-8.692L19.784 2.688a5 5 0 0 0-5.493-.342m8.878 15.408l49.685 34.467l-19.713 7.173l.092.143l13 22.517c1.428 2.473-.356 3.67-2.83 5.098s-4.402 2.375-5.83-.098l-13-22.517l-.103-.198l-16.294 13.677z" color="currentColor"></path>
</svg>
        </span>
    </div>

       </div>

      </div>
    </div>
  );
};

export default Hero;
