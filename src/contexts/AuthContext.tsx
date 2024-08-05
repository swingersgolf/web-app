// UserAuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    // Implement your sign-in logic here
    // For example, you could make an API call to sign in the user
    // On success, set the user and token state
    const fakeToken = 'fake-token-12345'; // Replace with real token from API
    setToken(fakeToken);
  };

  const signOut = () => {
    // Implement your sign-out logic here
    // For example, you could clear tokens and user state
    setToken(null);
  };

  const createAccount = async (name: string, email: string, password: string) => {
    // Implement your account creation logic here
    // For example, you could make an API call to create the user account
    // On success, set the user and token state
    const fakeToken = 'fake-token-12345'; // Replace with real token from API
    setToken(fakeToken);
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
};
