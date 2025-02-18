import { useRef, useState } from "react";

const AccordionComp = ({ que, answ, idn, active, handleToggle }) => {
    const contentEl = useRef();

    return (
        <div className="border rounded-t-2xl rounded-b-2xl  p-4">
            <div
                className={`px-4 flex justify-between cursor-pointer ${
                    active === idn ? "bg-[#171717]" : "bg-[#17171701]"
                }`}
                onClick={() => handleToggle(idn)}
            >
                <h5 className="text-base font-semibold">{que}</h5>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
     
      stroke="currentColor"
      className={`${active === idn ? "rotate-180" : ""} h-8 w-8 transition-transform`}
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
                <div className="p-4 text-slate-100">{answ}</div>
            </div>
        </div>
    );
};

export default AccordionComp;
