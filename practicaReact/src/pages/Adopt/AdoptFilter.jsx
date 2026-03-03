import { useEffect, useState } from "react";
import axios from "axios"

function gosso() {
	try {
		const respuesta = axios.get("https://express-js-on-vercel-azure-zeta-32.vercel.app/api/animales/disponibles");
		return respuesta.data;
	} catch(error){
		console.log("Error al obtener los animales disponibles:" + error);
		return[];
	}
}

const AdoptFilter = () => {

	useEffect(() => {
		gosso();
	})

    return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-12 d-flex flex-row gap-4 align-items-center py-3 px-4 bg-body-secondary'>
					<p className='m-0'>Filtres:</p>
					<select name='tamany' id='tama'>
						<option value="tamany" disabled defaultValue="tamany" hidden>Tamany</option>
					</select>
					<select name='raça' id='raça'>
						<option value="raça" disabled defaultValue="raça" hidden>Raça</option>
					</select>
					<select name='edat' id='edat'>
						<option value="edat" disabled defaultValue="edat" hidden>Edat</option>
					</select>
					<select name='sexe' id='sexe'>
						<option value="sexe" disabled defaultValue="sexe" hidden>Sexe</option>
					</select>
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					{}

				</div>
			</div>
		</div>
    )
}
export default AdoptFilter