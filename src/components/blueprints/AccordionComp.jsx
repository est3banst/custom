import { useRef, useState } from "react";

const AccordionComp = ({ que, answ, idn, num, active, secclass, clasname, handleToggle }) => {
    const contentEl = useRef();

    return (
        <div className="border rounded-t-2xl rounded-b-2xl  p-4">
            <div
                className={`px-4 flex justify-between cursor-pointer ${
                    active === idn ? "bg-[#242424]" : "bg-[#24242401]"
                }`}
                onClick={() => handleToggle(idn)}
            >
               <section className="flex gap-4"><b className="font-black">{num}</b>
                <h5 className={`font-bold ${clasname} leading-relaxed`}>{que}</h5></section>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
     
      stroke="currentColor"
      className={`${active === idn ? "rotate-180" : ""} w-[20px] shrink-0 md:w-[30px] transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
            </div>
            <div
                ref={contentEl}
                className="overflow-hidden transition-all duration-300"
                style={{
                    height: active === idn ? `${contentEl.current.scrollHeight}px` : "0px",
                }}
            >
                <div className={`p-4 leading-relaxed text-slate-100 ${secclass}`}>{answ}</div>
            </div>
        </div>
    );
};

export default AccordionComp;
