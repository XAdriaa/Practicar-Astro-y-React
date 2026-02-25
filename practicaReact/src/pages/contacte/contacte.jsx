import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacte = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2r4isfm', 'template_3px4l7i', form.current, {
        publicKey: 'cL7E8z8698ox4i4qL',
      })
      .then(
        () => {
          alert('Missatge enviat!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container-fluid mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 text-center mb-4'>
          <h1>Contacte</h1>
        </div>

        {/* Usamos una fila interna para dividir 6 y 6 columnas */}
        <div className='col-lg-10 border rounded overflow-hidden shadow-sm p-0'>
          <div className='row g-0 align-items-stretch'>

            {/* Mitad del Formulario (6 de 12 columnas) */}
            <div className='col-md-6 p-4 bg-light d-flex flex-column justify-content-center'>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom:</label>
                  <input type="text" name="name" id="name" className='form-control' required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correu:</label>
                  <input type="email" name="email" id="email" className='form-control' required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Missatge:</label>
                  <textarea name="message" id="message" className='form-control' rows="4" required></textarea>
                </div>
                <button type="submit" className='btn btn-primary w-100'>Enviar</button>
              </form>
            </div>

            {/* Mitad de la Imagen (6 de 12 columnas) */}
            <div className='col-md-6 d-none d-md-block'>
              <img
                src='/golden-retriever.webp'
                className='w-100 h-100'
                alt="Golden Retriever"
                style={{ objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacte;