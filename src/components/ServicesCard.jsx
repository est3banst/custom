import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import SmallCard from "./blueprints/SmallCard";
import { useLanguage } from "../config/LanguageContext";

const ServiceCard = ({ title, benefits, impacts, buttonText, link, index }) => {
    const {lang} = useLanguage();
    const { ref, inView } = useInView({ 
        threshold: 0.1,
        triggerOnce: true 
    });

    return (
        <>
        <section className='w-full lg:grid lg:grid-cols-3 gap-4 my-3'>
            
            <article className='md:flex w-5/6 md:flex-col md:justify-center'>
                <h2 className='text-xl md:text-2xl font-black'>{title}</h2>
                <div ref={ref} className={`load-custom-bord transition-all duration-[320ms] ${inView ? 'startAnim' : ''}`}></div>
            </article>

            <div className='lg:block flex gap-4 my-4 flex-col items-center'>
                <p className='text-xl font-bold self-start border-b-2 border-slate-50 w-max my-4'>
                   {lang === 'en' ? "You will get:" : "Obtendrás:"}
                </p>
                <section className='flex sm:w-5/6 md:w-4/6 gap-4 px-4 justify-center flex-col items-center'>
                    {benefits.map((benefit, index) => (
                        <SmallCard svg={benefit.svg} text={benefit.text} key={index} />
                    ))}
                </section>
            </div>

            <div className='lg:block flex gap-4 my-4 flex-col items-center'>
                <h2 className='text-xl font-bold self-start border-b-2 border-slate-50 w-max my-4'>
                    {lang === 'en' ? "Business Impact:" : "Impacto en el negocio:"}
                </h2>
                <section className='flex sm:w-5/6 md:w-4/6 px-4 gap-4 justify-center flex-col items-center'>
                    {impacts.map((impact, index) => (
                        <SmallCard svg={impact.svg} text={impact.text} key={index} />
                    ))}
                </section>
            </div>

            <Link to={link}>
                <div className='flex w-5/6 mx-auto'>
                    <button className='action'>{buttonText}</button>
                </div>
            </Link>
           
        </section>
        
         </>
    );
};

export default ServiceCard;
