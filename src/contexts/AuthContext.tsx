import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Profile {
    name: string;
    age: number;
    handicapIndex: number;
    // Add other profile fields as necessary
}

interface User {
    email: string;
    // Add other user fields as necessary
}

interface AuthContextType {
    token: string | null;
    user: User | null;
    profile: Profile | null;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signOut: () => void;
    createAccount: (name: string, email: string, password: string) => Promise<void>;
    fetchUser: () => Promise<void>;
    fetchProfile: () => Promise<void>;
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
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
            setUser(null);
            setProfile(null); // Clear user and profile when token is null
        }
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

    const fetchUser = async () => {
        try {
            if (token) {
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const fetchProfile = async () => {
        try {
            if (token) {
                const response = await axios.get('http://127.0.0.1:8000/api/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, user, profile, signIn, signInWithGoogle, signOut, createAccount, fetchUser, fetchProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
