import { Routes, Route } from 'react-router-dom'
import { PostDataUsers } from '../server/RequestAPIUsers'
import Login from '../backoffice/pages/Login/Login'


const RoutesAppPublic = () => {
  return (
	<Routes>
		<Route path='/' element={<Login alEnviar={PostDataUsers}/>}/>
	</Routes>
  )
}

export default RoutesAppPublic