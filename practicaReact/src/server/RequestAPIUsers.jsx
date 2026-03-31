import axios from "axios";
const url = import.meta.env.VITE_API_URL;
import Login from "../backoffice/pages/Login/Login";

export const PostDataUsers = async (data) => {
	try {
		const res = await axios.post(`${url}/auth/login`, data);
		console.log(res);
		console.log("Token recibido de forma correcta", res.data.token);
		return res.data;
	}

	catch(error){
		console.error("Error en la peticion de api o en el login", error);
	}
}

/**Hay que hasear las contraseñas de la base de datos porque si no no se pueden comprar
 * entonces hay que hacer unnscript para que este lo haga o si no hacerlo en una web online
 * para que asi se puedan comparar.
 */