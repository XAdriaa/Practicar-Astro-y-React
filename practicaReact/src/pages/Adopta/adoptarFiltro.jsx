import React from 'react'

const AdoptarFiltro = () => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-12 d-flex justify-content-start align-items-start'>
					<div className='m-0 d-flex flex-row gap-4'>
						<p>Filtres:</p>
						<div>
							<select name='tamany' id='tama'>
								<option value="" disabled selected hidden>Tamany</option>
							</select>
						</div>
						<div>
							<select name='raça' id='raça'>
								<option value="" disabled selected hidden>Raça</option>
							</select>
						</div>
						<div>
							<select name='edat' id='edat'>
								<option value="" disabled selected hidden>Edat</option>
							</select>
						</div>
						<div>
							<select name='sexe' id='sexe'>
								<option value="" disabled selected hidden>Sexe</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default AdoptarFiltro