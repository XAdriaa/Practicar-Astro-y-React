import { Link } from 'react-router-dom'
import { Whatsapp, Instagram, TwitterX, Facebook } from 'react-bootstrap-icons';


const Footer = () => {
  return (
	<footer className=' bordered border-top mt-5 bg-light'>
		<div className='container'>
			<div className='row'>
				<div className='col-12 d-flex flex-column flex-md-row justify-content-between align-items-center'>
					<img src='/logo_provisional-sinfondo.png'/>
					<div className='d-flex gap-4 flex-column flex-md-row justify-content-center align-items-center'>
						<div>
							<ul className='list-unstyled text-md-end text-center'>
								<li><p>Horari de visita de 09:00 a 19:00</p></li>
								<li><p>Donacions: IBAN ES85 4502 6595 4152 4899</p></li>
								<li><Link to="AvisLegal" className='text-decoration-none text-dark'><p>Avís legal</p></Link></li>
								<li><Link to="/PoliticaPrivacitat/" className='text-decoration-none text-dark'><p>Política de privacitat</p></Link></li>
								<li><Link to="/Cookies" className='text-decoration-none text-dark'><p>Cookies</p></Link></li>
							</ul>
						</div>
						<div>
							<ul className='list-unstyled fs-2 d-flex flex-md-column flex-sm-row gap-3'>
								<li><a href='https://wa.me/34653452030?text=Hola!%20Quiero%20información' className='text-dark'><Whatsapp className="bi bi-whatsapp" /></a></li>
								<li><a href='https://www.instagram.com/adri.navarros?igsh=aWZ5d3hwbmMxajdh' className='text-dark'><Instagram className="bi bi-instagram" /></a></li>
								<li><a href='https://x.com/Adrnavsav' className='text-dark'><TwitterX className="bi bi-twitter-x" /></a></li>
								<li><a href='https://www.facebook.com/share/1DAPQS2smq/' className='text-dark'><Facebook className="bi bi-facebook" /></a></li>
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