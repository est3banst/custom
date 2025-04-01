import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nosotros from './pages/AboutPage'; 
import Layout from './landing/Layout';
import Main from './Main';
import Faq from './Faq';
import PlansLayout from './pages/PlansLayout';
import ServicesLayout from './ServicesLayout';
import LayoutStores from './ecomm/LayoutStores';
import LayoutMs from './admin/LayoutMs';
import ContactPage from './pages/ContactPage';
import Portfolio from './Portfolio';
import Consultation from './Consultation';
import Support from './supp/Support';

const AppRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
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
  )
}

export default AppRouting