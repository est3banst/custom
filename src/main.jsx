import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import Nosotros from './components/pages/AboutPage'; 
import Layout from './components/landing/Layout';
import Faq from './components/Faq';
import PlansLayout from './components/pages/PlansLayout';
import ServicesLayout from './components/ServicesLayout';
import LayoutStores from './components/ecomm/LayoutStores';
import LayoutMs from './components/admin/LayoutMs';
import ContactPage from './components/pages/ContactPage';
import Portfolio from './components/Portfolio';
import Consultation from './components/Consultation';
import Support from './components/supp/Support';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Nosotros />} /> 
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<ServicesLayout/>} />
        <Route path='/plans' element={<PlansLayout/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/free-consultation' element={<Consultation/>} />
        <Route path="/services/spa-service" element={<Layout />}/>
        <Route path='/services/support-service' element={<Support />} />
        <Route path="/services/ecommerce" element={<LayoutStores />} />
        <Route path="/services/crm" element={<LayoutMs/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

