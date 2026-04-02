import { useAuth } from '../context/AuthCOntext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { token } = useAuth();


	if(token){
		return <Navigate to='/Back' />;
	} else {
		return children;
	}
}

export default PublicRoute