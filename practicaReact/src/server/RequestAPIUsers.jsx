import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const PostDataUsers = async (data) => {
	try {
		const res = await axios.post(`${url}/auth/login`, data,{
		withCredentials:true
		});
		return res.data.token
	}

	catch(error){
		console.error("Error en la peticion de api o en el login", error);
	}


}