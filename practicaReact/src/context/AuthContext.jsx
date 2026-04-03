import { createContext, useContext, useState } from "react";

//Crear contexto
const AuthContext = createContext(null);

//Provider
export function AuthProvide({children}) {
	const [token, setToken] = useState(null);

	const login = (newToken) => setToken(newToken);
	const logout = () => setToken(null);

	return (
		<AuthContext.Provider value={{ token, login, logout}}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	
	if(!context) {
		throw new Error("useAuth va dentro de AuthProvider");
	};
	return context;
};