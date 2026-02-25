import React from 'react'
import { Whatsapp, Instagram, TwitterX, Facebook } from 'react-bootstrap-icons';


const Footer = () => {
  return (
	<footer className=' bordered border-top mt-5 bg-light'>
		<div className='container'>
			<div className='row'>
				<div className='col-12 d-flex flex-column flex-md-row justify-content-between align-items-center'>
					<img src='./public/logo_provisional-sinfondo.png'/>
					<div className='d-flex gap-4 flex-column flex-md-row justify-content-center align-items-center'>
						<div>
							<ul className='list-unstyled text-md-end text-center'>
								<li><p>Horari de visita de 09:00 a 19:00</p></li>
								<li><p>Donacions: IBAN ES85 4502 6595 4152 4899</p></li>
								<li><p>Avis legal</p></li>
								<li><p>Política de privacitat</p></li>
								<li><p>Cookies</p></li>
							</ul>
						</div>
						<div>
							<ul className='list-unstyled fs-2 d-flex flex-md-column flex-sm-row gap-3'>
								<li><a href='https://wa.me/34653452030?text=Hola!%20Quiero%20información'></a><Whatsapp className="bi bi-whatsapp" /></li>
								<li><a href=''></a><Instagram className="bi bi-instagram" /></li>
								<li><a href=''></a><TwitterX className="bi bi-twitter-x" /></li>
								<li><a href=''></a><Facebook className="bi bi-facebook" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	)
}

export default Footer