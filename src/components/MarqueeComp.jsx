import React, { useEffect, useRef } from "react";

const MarqueeComp = () => {
  const marqueeRefs = [useRef(null), useRef(null)];
  const speeds = [ 0.6, 0.4]

  useEffect(() => {
    marqueeRefs.forEach((marqueeRef, index) => {
      const marquee = marqueeRef.current;
      let start = 0;
      let speed = speeds[index]; 

      const animate = () => {
        start -= speed;
        if (Math.abs(start) >= marquee.children[0].offsetWidth) {
          start = 0; 
        }
        marquee.style.transform = `translateX(${start}px)`;
        requestAnimationFrame(animate);
      };

      animate(); 
    });
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap p-4 text-3xl md:text-4xl">
      <div className="relative flex flex-col gap-3">
      
        <div className="marquee" ref={marqueeRefs[0]}>
          <div className="marquee-content">
            <p className="font-st">EXPERIENCIAS DIGITALES</p>
            <p className="brand">BRANDING</p>
            <p>DESARROLLO Y MANTENIMIENTO</p>
          </div>
          <div className="marquee-content">
            <p className="font-st">EXPERIENCIAS DIGITALES</p>
            <p className="brand">BRANDING</p>
            <p>DESARROLLO Y MANTENIMIENTO</p>
          </div>
       
          
        </div>

        <div className="marquee" ref={marqueeRefs[1]}>
          <div className="marquee-content">
            <p>ASESORÍA Y OPTIMIZACIÓN</p>
            <p>INTEGRACIONES COMPLETAS</p>
            <p className="brand">DESARROLLO WEB</p>
            <p className="font-st">APLICACIONES ESCALABLES</p>
          </div>
          <div className="marquee-content">
            <p>ASESORÍA Y OPTIMIZACIÓN</p>
            <p>INTEGRACIONES COMPLETAS</p>
            <p className="brand">DESARROLLO WEB</p>
            <p className="font-st">APLICACIONES ESCALABLES</p>
          </div>
        
          
        </div>
      </div>
    </div>
  );
};

export default MarqueeComp;
