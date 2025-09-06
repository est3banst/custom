import Services from './ui/Services'
import Hero from './ui/Hero'
import About from './ui/About'
import { useInView } from "react-intersection-observer";
import Footer from './ui/Footer';
import Nav from './ui/Nav';
import Charts from './ui/Charts';
import TwistedGallery from './ui/TwistedGallery';
import { useLanguage } from '../config/LanguageContext';
import Plans from './ui/Plans';

const Main = () => {

  const { lang } = useLanguage();

  const { ref, inView } = useInView({
   triggerOnce: false,
   threshold : 0.3

  });

  return (
    <>
    <Nav />
    <div className='overflow-x-hidden grid grid-cols-1 gap-4'>
    <div
        ref={ref}
        className={`transform transition-all duration-600 ease-out 
          ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[-5%] opacity-0'}`}
      >
    <Hero />
    </div>
    <div className='grid grid-cols-1 custom-spacing-pc gap-8 mb-6 lg:gap-15'>
    <TwistedGallery
    lang='es'/>
    <Services />
    
    <Charts
    lang='es'
    />
    <Plans />
    <About />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Main