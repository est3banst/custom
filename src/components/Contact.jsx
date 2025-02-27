import React from 'react'
import '../assets/Contact.css'

const Contact = () => {
  return (
    <>
    <div className='wrap-container'>
    <div  className="form-container">
      <form  className="form">
        <div  className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div  className="form-group">
          <label htmlFor="email">Número de telefono:</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div  className="form-group">
          <label htmlFor="textarea">Cómo podemos ayudarte?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Enviar</button>
      </form>
    </div>
    </div>
    </>



  )
}

export default Contact