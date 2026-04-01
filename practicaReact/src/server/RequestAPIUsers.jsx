import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const PostDataUsers = async (data) => {
	try {
		const res = await axios.post(`${url}/auth/login`, data,{
		withCredentials:true
		});
		console.log("Token recibido de forma correcta", res.data.token);
		const token = res.data.token;
		localStorage.setItem('token', token)
		return res.data
	}

	catch(error){
		console.error("Error en la peticion de api o en el login", error);
	}


}