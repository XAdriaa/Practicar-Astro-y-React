import React from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PostDataUsers } from "../../../server/RequestAPIUsers";
import { useAuth } from "../../../context/AuthCOntext";
import { useNavigate } from "react-router";


const Login = ({alEnviar}) => {
	const { login } = useAuth();
	const navigate = useNavigate();

	//Validaciones de YUP
	const validationSchema = Yup.object({
		correo_electronico: Yup.string().required("Obligatory"),
		password: Yup.string().required("Obligatory")
	});

	const formik = useFormik({


		initialValues:{
			correo_electronico:"",
			password:"",
		},
		validationSchema,
		onSubmit: async (values, {setSubmitting, resetForm}) => {
			alEnviar(values);

			try{
				const res = await PostDataUsers(values);


				if(res != null) {
					login(res);
					localStorage.setItem("Token",res)
					navigate("/Back/", {replace: true});


				} else {
					console.error("El componente login no esta recibiendo el token de la api")
				}
			} catch(error) {
				console.error("Error en el login componente", error);
			}

			setSubmitting(false);
			resetForm();
		}

	});


  return (
	<div className='container'>
		<div className='row'>
			<div className='col-12 d-flex justify-content-center flex-column align-items-center'>
				<h1>Inici de sessio</h1>
				<form className='flex-column d-flex' onSubmit={formik.handleSubmit}>
					<label>Correu Electronic</label>
					<input
					type='email'
					name='correo_electronico'
					id="correo_electronico"
					placeholder='Correu Electronic'
					className='form-control mb-3'
					value={formik.values.correo_electronico}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					/>

					<label>Contrasenya</label>
					<input
					type='password'
					name="password"
					id="password"
					placeholder='Contrasenya'
					className='form-control mb-3'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}/>

					<button type='submit' className='btn btn-primary mb-3'>Accedir</button>
				</form>
				<a href='#'>Has olvidat la contraseña?</a>

			</div>
		</div>
	</div>
  )
}

export default Login