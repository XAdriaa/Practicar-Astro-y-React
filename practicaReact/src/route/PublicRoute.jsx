import { useAuth } from '../context/AuthCOntext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	Login(localStorage.getItem("Token"));
	const { token } = useAuth();

	if(token === null) {
		return <Navigate to='/Back' replace/>
	} else {
		return children
	}
}

export default PublicRoute