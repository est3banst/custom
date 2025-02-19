import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import Nosotros from './components/pages/AboutPage'; 
import Layout from './components/landing/Layout';
import Faq from './components/Faq';
import PlansLayout from './components/pages/PlansLayout';
import ServicesPage from './components/pages/ServicesPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Nosotros />} /> 
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path='/plans' element={<PlansLayout/>} />
        <Route path="/services/spa-service" element={<Layout />}/>
        <Route path="/services/ecommerce" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

