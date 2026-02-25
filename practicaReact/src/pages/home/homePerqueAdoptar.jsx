import React from 'react'

const HomePerqueAdoptar = () => {
  return (
	<div className='d-flex'>
		<div className='card mx-3 tamaño-card-perque'>
			<img src='/agradablesFoto.webp' className='card-img-top img-card-perque'/>
			<div className='card-body'>
				<p className='fs-5'>Son molt agraits</p>
			</div>
		</div>

		<div className='card mx-3 tamaño-card-perque'>
			<img src='/perros-niños.webp' className='card-img-top img-card-perque'/>
			<div className='card-body'>
				<p className='fs-5'>Ajuden als chiquets amb el desenvolupament</p>
			</div>
		</div>

		<div className='card mx-3 tamaño-card-perque'>
			<img src='/perrosMestizo.jpg' className='card-img-top img-card-perque' id='tamany-individual'/>
			<div className='card-body'>
				<p className='fs-5'>Donar una nova oportunitat</p>
			</div>
		</div>

		<div className='card mx-3 tamaño-card-perque'>
			<img src='/perroMental.webp' className='card-img-top img-card-perque'/>
			<div className='card-body d-flex text-wrap'>
				<p className='fs-5'>Ajuda a la teua salut mental</p>
			</div>
		</div>

	</div>
  )
}

export default HomePerqueAdoptar