import React from "react";

const MarqueeComp = () => {

  return (
    <div className="overflow-hidden bg-white/5 shadow-lg text-slate-200 rotate-[3deg] my-3 whitespace-nowrap py-4 text-3xl md:text-4xl">
      <div className="relative flex flex-col gap-3">
      
        <div className="marquee">
          <div className="marquee-content">
            <p className="font-st">EXPERIENCIAS DIGITALES</p>
            <p className="brand">BRANDING</p>
            <p className="brand">DESARROLLO Y MANTENIMIENTO</p>
         
          
            <p aria-hidden='true' className="font-st">EXPERIENCIAS DIGITALES</p>
            <p aria-hidden='true' className="brand">BRANDING</p>
            <p aria-hidden='true' className="brand">DESARROLLO Y MANTENIMIENTO</p>
          </div>
       
          
        </div>

        <div className="marquee">
          <div className="marquee-second-content">
            <p className="font-st">ASESORÍA Y OPTIMIZACIÓN</p>
            <p className="brand">INTEGRACIONES COMPLETAS</p>
            <p className="brand">DESARROLLO WEB</p>
            <p className="font-st">APLICACIONES ESCALABLES</p>
         
            <p aria-hidden='true' className="font-st">ASESORÍA Y OPTIMIZACIÓN</p>
            <p aria-hidden='true' className="brand">INTEGRACIONES COMPLETAS</p>
            <p aria-hidden='true' className="brand">DESARROLLO WEB</p>
            <p aria-hidden='true' className="font-st">APLICACIONES ESCALABLES</p>
          </div>
        
          
        </div>
      </div>
    </div>
  );
};

export default MarqueeComp;
