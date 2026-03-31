import axios from "axios";
const url = import.meta.env.VITE_API_URL;
import Login from "../backoffice/pages/Login/Login";

export const PostDataUsers = async (data) => {
	try {
		const res = await axios.post(`${url}/login`, data);
		console.log("Token recibido de forma correcta", Response.data.token);
		return res.data;
	}

	catch(error){
		console.error("Error en la peticion de api o en el login", error)
	}
}