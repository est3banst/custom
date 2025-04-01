import React from "react";
import { useLanguage } from "../config/LanguageContext";

const MarqueeComp = () => {
  const { lang } = useLanguage();

  return (
    <div className="overflow-hidden bg-white/5 shadow-lg text-slate-200 my-3 whitespace-nowrap py-4 text-3xl md:text-4xl">
      <div className="relative flex flex-col gap-3">
      
        <div className="marquee">
          <div className="marquee-content">
            <p className="font-st">{ lang === 'en' ? 'DIGITAL EXPERIENCES' : 'EXPERIENCIAS DIGITALES'}</p>
            <p className="brand">BRANDING</p>
            <p className="brand">{ lang === 'en' ? 'DEVELOPMENT AND MAINTENANCE' : 'DESARROLLO Y MANTENIMIENTO'}</p>
         
          
            <p aria-hidden='true' className="font-st">{ lang === 'en' ? 'DIGITAL EXPERIENCES' : 'EXPERIENCIAS DIGITALES'}</p>
            <p aria-hidden='true' className="brand">BRANDING</p>
            <p aria-hidden='true' className="brand">{ lang === 'en' ? 'DEVELOPMENT AND MAINTENANCE' : 'DESARROLLO Y MANTENIMIENTO'}</p>
          </div>
       
          
        </div>

        <div className="marquee">
          <div className="marquee-second-content">
            <p className="font-st">{lang === 'en' ? 'CONSULTING AND OPTIMIZATION' : 'ASESORÍA Y OPTIMIZACIÓN'}</p>
            <p className="brand">{lang === 'en' ? 'COMPLETE INTEGRATIONS' : 'INTEGRACIONES COMPLETAS'}</p>
            <p className="brand">{lang === 'en' ? 'WEB DEVELOPMENT' : 'DESARROLLO WEB'}</p>
            <p className="font-st">{lang === 'en' ? 'SCALABLE APPLICATIONS' : 'APLICACIONES ESCALABLES'}</p>
         
            <p aria-hidden='true' className="font-st">{lang === 'en' ? 'CONSULTING AND OPTIMIZATION' : 'ASESORÍA Y OPTIMIZACIÓN'}</p>
            <p aria-hidden='true' className="brand">{lang === 'en' ? 'COMPLETE INTEGRATIONS' : 'INTEGRACIONES COMPLETAS'}</p>
            <p aria-hidden='true' className="brand">{lang === 'en' ? 'WEB DEVELOPMENT' : 'DESARROLLO WEB'}</p>
            <p aria-hidden='true' className="font-st">{lang === 'en' ? 'SCALABLE APPLICATIONS' : 'APLICACIONES ESCALABLES'}</p>
          </div>
        
          
        </div>
      </div>
    </div>
  );
};

export default MarqueeComp;
