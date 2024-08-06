// UserAuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
	token: string | null;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => void;
	createAccount: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuth = (): AuthContextType => {
  	const context = useContext(AuthContext);
  	if (!context) {
    	throw new Error('useAuth must be used within an AuthProvider');
  	}
  	return context;
};

interface AuthProviderProps {
  	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [token, setToken] = useState<string | null>(() => {
		// Initialize token from local storage
		return localStorage.getItem('authToken');
	});

	useEffect(() => {
		// Persist the token to local storage
		if (token) {
		localStorage.setItem('authToken', token);
		} else {
		localStorage.removeItem('authToken');
		}
	}, [token]);

	const signIn = async (email: string, password: string) => {
		try {
			const response = await axios.post('http://127.0.0.1:8000/api/login', {
				email,
				password
			});
			console.log(response);
			setToken(response.data.data.token);
			return Promise.resolve(); // Return a resolved promise on success
		} catch (error) {
			console.error('Error logging in:', error);
			return Promise.reject(error); // Return a rejected promise on failure
		}
	};


	const signOut = () => {
		// Implement your sign-out logic here
		// For example, you could clear tokens and user state
		setToken(null);
	};

	const createAccount = async (name: string, email: string, password: string) => {
		try {
			const response = await axios.post('http://127.0.0.1:8000/api/register', {
				name,
				email,
				password
			});
			console.log(response);
			return Promise.resolve(); // Return a resolved promise on success
		} catch (error) {
			console.error('Error creating account:', error);
			return Promise.reject(error); // Return a rejected promise on failure
		}
	};


	return (
		<AuthContext.Provider value={{ token, signIn, signOut, createAccount }}>
			{children}
		</AuthContext.Provider>
	);
};
