import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, ValidationError } from '@formspree/react';
import '../assets/Contact.css';
import { CAPTCHA, KEY_CAPTCHA } from '../apiroutes/captcha';
import { useLanguage } from '../config/LanguageContext';


const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {lang} = useLanguage();

  const [state, handleSubmit] = useForm("xldgqzel");

  const closeModal = () => {
    setShowModal(false);
    window.location.reload(); 
  };

  if (state.succeeded) {
    setTimeout(() => setShowModal(true), 100); 
  }
  let mssgResponse = lang === 'en' ? 'Invalid CAPTCHA, try again' : 'Captcha inválido, intenta nuevamente';
  const handleCaptchaChange = async (token) => {
    setRecaptchaToken(token);
    if (token) {
      try {
        const response = await fetch(CAPTCHA, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recaptchaToken: token }),
        });

        const data = await response.json();

        if (data.success) {
          setCaptchaValidated(true);
        } else {
          alert(mssgResponse);
          setCaptchaValidated(false);
        }
      } catch (error) {
        console.error("Error CAPTCHA:", error);
        setCaptchaValidated(false);
      }
    } else {
      setCaptchaValidated(false);
    }
  };

  return (
    <div className="wrap-container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{ lang === 'en' ? 'Phone:' : 'Número de teléfono:'}</label>
            <input type="text" id="phone" name="phone" required />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">{ lang === 'en' ? 'How can we help you?' : '¿Cómo podemos ayudarte?'}</label>
            <textarea name="message" id="message" rows="10" cols="50" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <ReCAPTCHA sitekey={KEY_CAPTCHA} onChange={handleCaptchaChange} />
          <button className="form-submit-btn" type="submit" disabled={!captchaValidated || state.submitting}>
          {captchaValidated ? "Enviar" : <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
	<path fill="currentColor" d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8A7.77 7.77 0 0 0 8 .5M1.25 8A6 6 0 0 1 3 3.85L12.09 13A7.1 7.1 0 0 1 8 14.25A6.52 6.52 0 0 1 1.25 8M13 12.15L3.91 3A7.1 7.1 0 0 1 8 1.75A6.52 6.52 0 0 1 14.75 8A6 6 0 0 1 13 12.15"></path>
</svg>}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p className="text-xl font-medium m-auto">
              { lang === 'en' ? 'Thank you for contacting us. We will get back to you within 48 hours!' : 'Gracias por comunicarte. Nos pondremos en contacto contigo dentro de un plazo de 48hs!'}
            </p>
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
