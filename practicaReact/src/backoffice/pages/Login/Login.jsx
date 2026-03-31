import React from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {
	//Validaciones de YUP
	const validationSchema = Yup.object({
		email: Yup.string().required("Obligatory"),
		password: Yup.string().required("Obligatory")
	});

	const formik = useFormik({
		initialValues:{
			email:"",
			password:"",
		},
		validationSchema,
		onSubmit: (values) => {
			console.log("Los datos enviados por el formulario de inicio de sesion son", values)
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
					name='email'
					id="email"
					placeholder='Correu Electronic'
					className='form-control mb-3'
					value={formik.values.email}
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