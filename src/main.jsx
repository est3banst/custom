import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageHandler from './config/LanguageHandler';
import { LanguageProvider } from './config/LanguageContext';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <LanguageProvider>
      <LanguageHandler/>
      <App/>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

