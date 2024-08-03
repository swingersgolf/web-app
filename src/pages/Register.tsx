import axios from 'axios';
import { useState } from 'react';
import Page from '@components/Page';
import Card from '@components/Card';
import BannerLogo from '@assets/branding/BannerLogo.svg';
import Legal from '@components/Legal';
import { registerValidationSchema } from '@utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@components/AuthForm';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
    email: string;
    name: string;
    password: string;
};

const formFields = [
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Full name', type: 'text', name: 'name' },
    { label: 'Password', type: 'password', name: 'password' },
];

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleCreateAccount: SubmitHandler<FormValues> = async (data) => {
        // try {
        //     const response = await axios.post('http://localhost:4000/api/users', data);
        //     console.log(response.data);
        // } catch (error) {
        //     setError((error as any).response.data.message);
        // }
        navigate('/');
    };

  return (
    <Page id="register">
        <div className="trapezoid-background bg-dark-green" />
        <div id="register-content" className="flex flex-col justify-start gap-y-8 py-16">
            <img src={BannerLogo} alt="banner-logo" className="w-40" />
            <Card id="create-account-form" className="w-form-card h-fit gap-y-8">
                <h3>Create your account</h3>
                <AuthForm
                    formFields={formFields}
                    validationSchema={yupResolver(registerValidationSchema)}
                    onSubmit={handleCreateAccount}
                    error={error}
                    buttonText="Create account"
                />
                <p>By clicking create account you are agreeing to follow our
                    <a className='text-dark-green' href='/privacy'> privacy & terms</a>.
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
