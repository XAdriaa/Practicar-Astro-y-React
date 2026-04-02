import { Routes, Route } from 'react-router-dom'
import User from '../backoffice/pages/Users/User'
import Dashboard from '../backoffice/dashboard'

const RoutesAppPrivate = () => {
  return (
	<>
	<Routes>
		<Route path='/User' element={<User/>}></Route>
        <Route path='/' element={<Dashboard />}></Route>
	</Routes>
	</>
  )
}

export default RoutesAppPrivate