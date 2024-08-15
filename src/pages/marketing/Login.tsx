import axios from 'axios';
import { useState } from 'react';
import Card from "@components/Card";
import Page from "@components/Page";
import BannerLogo from "@assets/branding/BannerLogo.svg";
import Legal from "@components/Legal";
import { loginValidationSchema } from '@utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@components/forms/Form';
import { useAuth } from '@contexts/AuthContext';
import Spinner from '@components/Spinner';

type FormValues = {
    email: string;
    password: string;
};

const formFields = [
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
];

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signIn } = useAuth();

    const handleSignIn: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        setError(''); // Clear any previous errors
        try {
            await signIn(data.email, data.password);
            navigate('/app');
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message || 'Failed to create account. Please try again.';
                setError(errorMessage);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

  return (
    <Page id="login">
        <div className="trapezoid-background bg-dark-green" />
        <div id="login-content" className="flex flex-col justify-start gap-y-8 py-16">
            <img src={BannerLogo} alt="banner-logo" className="w-40" />
            <Card id="sign-in-form" className="w-form-card h-fit gap-y-8">
                <h3>Sign in to your account</h3>
                { loading ? <div className="w-full h-full flex justify-center items-center"><Spinner /></div> :
                    <Form
                        formFields={formFields}
                        validationSchema={yupResolver(loginValidationSchema)}
                        onSubmit={handleSignIn}
                        error={error}
                        buttonText="Sign In"
                    />
                }
                <div className="flex justify-center items-center text-center">
                    New to Swingers?&nbsp;<a href="/register" className="text-light-green">Create an account</a>
                </div>
            </Card>
            <Legal />
        </div>
    </Page>
  );
};

export default Login;
