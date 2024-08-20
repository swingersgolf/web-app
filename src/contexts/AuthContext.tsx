import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Account {
    name: string;
    age: number;
    email: string;
    handicapIndex: number;
    // Add other profile fields as necessary
}

interface AuthContextType {
    token: string | null;
    account: Account | null;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signOut: () => void;
    createAccount: (name: string, email: string, password: string) => Promise<void>;
    fetchAccount: () => Promise<void>;
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
        return localStorage.getItem('authToken');
    });
    const [account, setAccount] = useState<Account | null>(null);

    useEffect(() => {
        const initializeAuth = async () => {
            if (token) {
                localStorage.setItem('authToken', token);
                await fetchAccount();
            } else {
                localStorage.removeItem('authToken');
                setAccount(null);
            }
        };

        initializeAuth();
    }, [token]);

    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password
            });
            setToken(response.data.token);
        } catch (error) {
            console.error('Error logging in:', error);
            return Promise.reject(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/google/redirect');
        } catch (error) {
            console.error('Error logging in:', error);
            return Promise.reject(error);
        }
    };

    const signOut = () => {
        setToken(null);
    };

    const createAccount = async (name: string, email: string, password: string) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password
            });
        } catch (error) {
            console.error('Error creating account:', error);
            return Promise.reject(error);
        }
    };

    const fetchAccount = async () => {        
        try {
            if (token) {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAccount(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }        
    };

    return (
        <AuthContext.Provider value={{ token, account, signIn, signInWithGoogle, signOut, createAccount, fetchAccount }}>
            {children}
        </AuthContext.Provider>
    );
};
