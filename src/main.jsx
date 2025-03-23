import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageHandler from './components/LanguageHandler';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <LanguageHandler/>
      <App/>
    </BrowserRouter>
  </StrictMode>
);

