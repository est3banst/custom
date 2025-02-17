import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import Nosotros from './components/AboutPage'; 
import Layout from './components/landing/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nosotros" element={<Nosotros />} /> 
        <Route path="/spa-service" element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

