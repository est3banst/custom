import { Routes, Route } from 'react-router-dom'
import Nosotros from '../pages/AboutPage'; 
import Layout from '../services/Layout';
import Main from '../Main';
import Faq from '../ui/Faq';
import ServicesLayout from '../ServicesLayout';
import LayoutStores from '../services/LayoutStores';
import ContactPage from '../pages/ContactPage';
import Portfolio from '../ui/Portfolio';
import Consultation from '../ui/Consultation';
import Support from '../services/Support';

const AppRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Nosotros />} /> 
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<ServicesLayout/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/free-consultation' element={<Consultation/>} />
        <Route path="/services/spa-service" element={<Layout />}/>
        <Route path='/services/support-service' element={<Support />} />
        <Route path="/services/ecommerce" element={<LayoutStores />} />
      </Routes>
  )
}

export default AppRouting