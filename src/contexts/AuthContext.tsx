import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { UserType, ProfileType } from '@types/AuthTypes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
    token: string | null;
    user: UserType | null;
    profile: ProfileType | null;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signOut: () => void;
    createAccount: (name: string, email: string, password: string) => Promise<void>;
    fetchUser: () => Promise<void>;
    fetchProfile : () => Promise<void>;
    updateProfile : (updatedProfile: ProfileType) => Promise<void>;
    verifyEmail: (email: string, code: string) => Promise<void>;
    resendVerificationCode: (email: string) => Promise<void>;
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
    const [user, setUser] = useState<UserType | null>(null);
    const [profile, setProfile] = useState<ProfileType | null>(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const initializeAuth = async () => {
            if (token) {
                localStorage.setItem('authToken', token);
                await fetchUser();
                await fetchProfile();
            } else {
                localStorage.removeItem('authToken');
                setUser(null);
                setProfile(null);
            }
        };

        initializeAuth();
    }, [token]);

    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/v1/login`, {
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
            const response = await axios.post("");
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
            await axios.post(`${API_URL}/v1/register`, {
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
                const response = await axios.get(`${API_URL}/v1/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            return Promise.reject(error);
        }        
    };

    const fetchProfile = async () => {        
        try {
            if (token) {
                const response = await axios.get(`${API_URL}/v1/user-profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            return Promise.reject(error);
        }        
    };

    const updateProfile = async (updatedProfile: ProfileType) => {        
        try {
            if (token) {
                await axios.patch(
                    `{API_URL}/v1/user-profile`,
                    updatedProfile,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json' // Set Content-Type header
                        }
                    }
                );
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            return Promise.reject(error);
        }
    };

    const verifyEmail = async (name: string, code: string) => {
        try {
            await axios.post(`${API_URL}/v1/verify`, {
                email,
                code
            });
        } catch (error) {
            console.error('Error creating account:', error);
            return Promise.reject(error);
        }
    };

    const resendVerificationCode = async (email: string) => {
        try {
            await axios.post(`${API_URL}/v1/resend`, {
                email,
            });
        } catch (error) {
            console.error('Error creating account:', error);
            return Promise.reject(error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, user, profile, signIn, signInWithGoogle, signOut, createAccount, fetchUser, fetchProfile, updateProfile, verifyEmail, resendVerificationCode }}>
            {children}
        </AuthContext.Provider>
    );
};
