import { createContext, useContext, useState, useEffect } from "react";

//Crear contexto
const AuthContext = createContext(null);

//Provider
export function AuthProvide({children}) {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("Token");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	const login = (newToken) => {
		setToken(newToken);
		localStorage.setItem("Token", newToken);
	};
	const logout = () => {
		setToken(null);
		localStorage.removeItem("Token");
	};

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