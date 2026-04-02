import { useAuth } from '../context/AuthCOntext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
	const { token } = useAuth();

	if(token){
		return children;
	} else {
		return <Navigate to='/Admin' />;
	}
}

export default PrivateRoute