import axios from "axios";
const url = import.meta.env.VITE_API_URL;

//Animales
export const FetchAdoptsHome = async () => {

		try {
			const res = await axios.get(`${url}/animales/adoptados`);
			return res.data;
		}catch(error){
			console.error("Error en la peticion de animales recientemente adoptados de la Home", error);
		}
}

export const FetchRaces = async () => {
	try{
		const res = await axios.get(`${url}/razas`);
		return res.data;
	} catch (error){
		console.log("Error a l ahora de obtener las razas de los animales", error);
	}
}

export const FetchSize = async () => {
	try{
		const res = await axios.get(`${url}/tamanos`);
		return res.data;
	} catch (error){
		console.log("Error a l ahora de obtener el tamanyo de los animales", error);
	}
}

export const FetchFiltreAnimals = async (params) => {
	try{
		const res = await axios.get(`${url}/animales`, {params});
		return res.data;
	} catch(error){
		console.log("Error al intentar hacer la peticion de la API del filtrado de los animales", error);
	}
}
