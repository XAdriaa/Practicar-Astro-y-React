import axios from "axios";
const url = import.meta.env.VITE_API_URL;


export const FetchAdoptsHome = async () => {
	console.log("URL que se está usando:", `${url}animales/adoptados`);
		try {
			const res = await axios.get(`${url}/animales/adoptados`);
			return res.data;
		}catch(error){
			console.error("Error en la peticion de animales recientemente adoptados de la Home", error);
		}
}