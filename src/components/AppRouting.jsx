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
import MainEn from './en/MainEn';
import NosotrosEn from './en/AboutPageEn'
import FaqEn from './en/FaqEn'
import ServicesLayoutEn from './en/ServicesLayoutEn'
import PlansLayoutEn from './en/PlansLayoutEn'
import PortfolioEn from './en/PortfolioEn'
import ContactPageEn from './en/ContactPageEn'
import ConsultationEn from './en/ConsultationEn'
import LayoutEn from './en/LayoutEn'
import SupportEn from './en/SupportEn'
import LayoutStoresEn from './en/LayoutStoresEn'
import LayoutMsEn from './en/LayoutMsEn'

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
        <Route path="/en" element={<MainEn />} />
        <Route path="/en/about" element={<NosotrosEn />} /> 
        <Route path="/en/faq" element={<FaqEn />} />
        <Route path="/en/services" element={<ServicesLayoutEn/>} />
        <Route path='/en/plans' element={<PlansLayoutEn/>} />
        <Route path='/en/portfolio' element={<PortfolioEn/>} />
        <Route path='/en/contact' element={<ContactPageEn/>} />
        <Route path='/en/free-consultation' element={<ConsultationEn/>} />
        <Route path="/en/services/spa-service" element={<LayoutEn />}/>
        <Route path='/en/services/support-service' element={<SupportEn />} />
        <Route path="/en/services/ecommerce" element={<LayoutStoresEn />} />
        <Route path="/en/services/crm" element={<LayoutMsEn/>} />
      </Routes>
  )
}

export default AppRouting