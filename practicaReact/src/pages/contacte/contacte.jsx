import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacte = () => {
	 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
	<div>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center align-items-center flex-column'>
				<h1>Contacte</h1>
				<form ref={form} onSubmit={sendEmail}>
					<label for="name">Nombre:</label><br></br>
					<input type="text" name="user_name"></input><br></br>
					<label for="email">Correo electrónico:</label><br></br>
					<input type="email" name="user_email"></input><br></br>
					<label for="message">Mensaje:</label><br></br>
					<textarea name="message"></textarea><br></br>
					<input type="submit" value="Send"></input>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Contacte