import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { token } = useAuth();

	if(token != null) {
		return <Navigate to='/Back' replace/>
	} else {
		return children
	}
}

export default PublicRoute