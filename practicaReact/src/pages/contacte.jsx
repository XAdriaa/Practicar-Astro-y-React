import React from 'react'

const Contacte = () => {
  return (
	<div>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center align-items-center flex-column'>
				<h1>Contacte</h1>
				<form>
					<label for="name">Nombre:</label><br></br>
					<input type="text" id="name" name="name"></input><br></br>
					<label for="email">Correo electrónico:</label><br></br>
					<input type="email" id="email" name="email"></input><br></br>
					<label for="message">Mensaje:</label><br></br>
					<textarea id="message" name="message"></textarea><br></br>
					<input type="submit" value="Enviar"></input>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Contacte