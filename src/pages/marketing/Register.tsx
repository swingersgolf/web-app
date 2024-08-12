import axios from 'axios';
import { useState } from 'react';
import Page from '@components/Page';
import Card from '@components/Card';
import BannerLogo from '@assets/branding/BannerLogo.svg';
import Legal from '@components/Legal';
import { registerValidationSchema } from '@utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@components/forms/Form';
import { useAuth } from '@contexts/AuthContext';
import Spinner from '@components/Spinner';

type FormValues = {
    email: string;
    name: string;
    password: string;
};

const formFields = [
    { label: 'Full name', type: 'text', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
];

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { createAccount, signIn } = useAuth();

    const handleCreateAccount: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        setError(''); // Clear any previous errors
        try {
            await createAccount(data.name, data.email, data.password);
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
        <Page id="register">
            <div className="trapezoid-background bg-dark-green" />
            <div id="register-content" className="flex flex-col justify-start gap-y-6 py-16">
                <img src={BannerLogo} alt="banner-logo" className="w-40" />
                <Card id="create-account-form" className="w-form-card h-fit gap-y-6">
                    <h3>Create your account</h3>
                    {loading ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <Form
                            formFields={formFields}
                            validationSchema={yupResolver(registerValidationSchema)}
                            onSubmit={handleCreateAccount}
                            error={error}
                            buttonText="Create account"
                        />
                    )}
                    <p>
                        By clicking create account you are agreeing to follow our
                        <a className="text-dark-green" href="/privacy"> privacy & terms</a>.
                    </p>
                    <div className="flex justify-center items-center text-center">
                        Already have an account?&nbsp;<a href="/login" className="text-light-green">Sign in</a>
                    </div>
                </Card>
                <Legal />
            </div>
        </Page>
    );
};

export default Register;
