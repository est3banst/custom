import { useState } from "react";
import NavEn from "./NavEn";
import FooterEn from "./FooterEn";
import AccordionComp from "../AccordionComp";
import { useEffect } from "react";
import useScrollTop from '../hooks/useScrollTop'

const questions = [
    {
        question: "What makes this web development service different?",
        answ: "We specialize in developing custom websites that combine cutting-edge technology with data-driven strategies. Our focus is on creating high-performance, responsive web designs that drive real business growth. Whether it's website design for the healthcare sector, law firms, or consulting groups, each solution is built with clean code, fast loading times, and strategic patterns that maximize conversions."
    },
    {
        question: "How long does it take to create a web application or website?",
        answ: "Project timelines vary depending on scope and complexity. Basic website design services typically take 2 to 4 weeks, while more comprehensive solutions can take 1 to 3 months. During our initial assessment phase, we provide a detailed timeline tailored to your specific needs and objectives."
    },
    {
        question: "What types of businesses do we work with?",
        answ: "As a web development company, we work with various industries, including law firms, gyms, consulting groups, healthcare service providers, and e-commerce businesses. We specialize in designing websites for medical practices, developing custom websites, and creating high-converting page designs that deliver results."
    },
    {
        question: "Do we provide ongoing support and maintenance?",
        answ: "Yes, all services include continuous support and maintenance tailored to your budget. A basic support plan includes monitoring and security updates, while a premium support plan includes regular check-ins, dedicated weekly development hours, optimizations, and same-day response times."
    },
    {
        question: "Can you work with my existing website?",
        answ: "Yes, our Web Support and Optimization service includes redesigning, performance improvement, adding or modifying functionalities, or a complete design transformation while maintaining the same content and SEO value. We will audit your current site and recommend the most responsive design approach to help you achieve your goals."
    },
];


const FaqEn = () => {

    useScrollTop();
    
    const [active, setActive] = useState(null);

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <>
        <div className="flex flex-col justify-between h-screen">
            <NavEn />
            <div className="pt-20 rounded-2xl w-full mx-auto px-4">
                <h2 className="text-3xl uppercase font-bold text-[#a78bfa] p-4">FREQUENT
                    </h2>
                    <h2 className="text-3xl uppercase font-bold px-4">questions</h2>
                <div className="mt-4">
                    {questions.map((question, index) => (
                        <AccordionComp
                            key={index}
                            que={question.question}
                            answ={question.answ}
                            idn={index + 1}
                            active={active}
                            handleToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
            <FooterEn />

        </div>
        </>
    );
};

export default FaqEn;