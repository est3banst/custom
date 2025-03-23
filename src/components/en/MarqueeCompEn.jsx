import React from "react";

const MarqueeCompEn = () => {

  return (
    <div className="overflow-hidden bg-white/5 shadow-lg text-slate-200 my-3 whitespace-nowrap py-4 text-3xl md:text-4xl">
      <div className="relative flex flex-col gap-3">
      
        <div className="marquee">
          <div className="marquee-content">
            <p className="font-st">DIGITAL EXPERIENCES</p>
            <p className="brand">BRANDING</p>
            <p className="brand">
            DEVELOPMENT AND MAINTENANCE</p>
         
          
            <p aria-hidden='true' className="font-st">DIGITAL EXPERIENCES</p>
            <p aria-hidden='true' className="brand">BRANDING</p>
            <p aria-hidden='true' className="brand">
            DEVELOPMENT AND MAINTENANCE</p>
          </div>
       
          
        </div>

        <div className="marquee">
          <div className="marquee-second-content">
            <p className="font-st">CONSULTING AND OPTIMIZATION</p>
            <p className="brand">COMPLETE INTEGRATIONS</p>
            <p className="brand">WEB DEVELOPMENT</p>
            <p className="font-st">SCALABLE APPLICATIONS</p>
         
            <p aria-hidden='true' className="font-st">CONSULTING AND OPTIMIZATION</p>
            <p aria-hidden='true' className="brand">COMPLETE INTEGRATIONS</p>
            <p aria-hidden='true' className="brand">WEB DEVELOPMENT</p>
            <p aria-hidden='true' className="font-st">SCALABLE APPLICATIONS</p>
          </div>
        
          
        </div>
      </div>
    </div>
  );
};

export default MarqueeCompEn;