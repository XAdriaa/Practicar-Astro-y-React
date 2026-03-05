import axios from "axios";
const url = import.meta.env.VITE_API_URL;


const FetchAdoptsHome = async () => {
		try {
			const res = await axios.get(`${url}animales/adoptados`);
			return res.data
		}catch(error){
			console.error("Error en la peticion de animales recientemente adoptados de la Home", error);
		}
  return
}

export default FetchAdoptsHome