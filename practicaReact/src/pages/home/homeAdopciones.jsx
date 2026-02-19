import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://express-js-on-vercel-azure-zeta-32.vercel.app/api/";

async function getAdoptados() {
	try {
		const respuesta = await axios.get("https://express-js-on-vercel-azure-zeta-32.vercel.app/api/animales/adoptados");
		return respuesta.data;
	}catch(error){
		console.log(error);
		return [];
	}
}

// 	function filtrarAdoptados(adoptados) {
// 		var fecha = new Date();
// 		let nuevosAdoptados = [];
// 		const adoptadoReciente = adoptados.map((animal) =>(

// 			if( a < fecha){

// 			}
// 		))

// }

const HomeAdopciones = () => {
	const [adoptados, setAdoptados] = useState([]);


	useEffect(() => {
		const obtenerDatos = async () => {
		const data = await getAdoptados();
		setAdoptados(data);
		filtrarAdoptados(data);
		console.log(fecha);
		};
	 obtenerDatos();
	}, []);


  return (
	<div className='container'>
		<div className="row">
			<div className="col-12">
				<div className="d-flex justify-content-between text-center">
					{/**Cartas de los aimales recientemente adoptados */}
					{adoptados.map((animal) =>(
						<div key={animal.id_animal} className="card w-50">
							<img src={animal.img} className="card-img-top img-fluid" alt={animal.nombre}/>
							<div className="card-body">
								<h3 className="card-title">{animal.nombre}</h3>
								<p className="card-text">{animal.raza}</p>
								<p className="card-text">{animal.descripcion}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
  )
}

export default HomeAdopciones