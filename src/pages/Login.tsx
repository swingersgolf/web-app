import axios from 'axios';
import { useState } from 'react';
import Card from "@components/Card";
import Page from "@components/Page";
import BannerLogo from "@assets/branding/BannerLogo.svg";
import Legal from "@components/Legal";
import { loginValidationSchema } from '@utils/validationSchemas';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@components/forms/Form';
import { useAuth } from '@contexts/AuthContext';
import Spinner from '@components/Spinner';
import { SiGoogle, SiFacebook, SiTwitter, SiGithub } from 'react-icons/si';

type FormValues = {
    email: string;
    password: string;
};

const formFields = [
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
];

const socialMediaProviders = [
    { name: 'Google', icon: SiGoogle, signInMethod: 'signInWithGoogle' },
    { name: 'Facebook', icon: SiFacebook, signInMethod: 'signInWithFacebook' },
    { name: 'Twitter', icon: SiTwitter, signInMethod: 'signInWithTwitter' },
    // { name: 'GitHub', icon: SiGithub, signInMethod: 'signInWithGithub' },
];

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useAuth();

    const handleSignIn: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        setError(''); // Clear any previous errors
        try {
            await signIn(data.email, data.password);
            navigate('/');
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message || 'Failed to sign in. Please try again.';
                setError(errorMessage);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSocialSignIn = async (signInMethod: () => Promise<void>) => {
        setLoading(true);
        setError('');
        try {
            await signInMethod();
        } catch (error: any) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Page id="login">
            <div className="trapezoid-background bg-primary" />
            <div id="login-content" className="flex flex-col justify-start gap-y-8 py-16">
                <img src={BannerLogo} alt="banner-logo" className="w-40" />
                <Card id="sign-in-form" className="w-form-card-mobile md:w-form-card-md lg:w-form-card-lg h-fit gap-y-8">
                    {loading ? (
                        <>
                            <h3 className="text-center">Signing in</h3>
                            <div className="w-full h-full flex justify-center items-center"><Spinner /></div>
                        </>
                    ) : (
                        <>
                            <h3>Sign in to your account</h3>
                            <Form
                                formFields={formFields}
                                validationSchema={yupResolver(loginValidationSchema)}
                                onSubmit={handleSignIn}
                                error={error}
                                buttonText="Sign In"
                            />
                            <div id="social-media-sign-in" className="flex flex-row justify-evenly">
                                {socialMediaProviders.map((provider, index) => {
                                    const IconComponent = provider.icon;
                                    return (
                                        <IconComponent
                                            key={index}
                                            size={32}
                                            className="cursor-pointer text-neutral-dark hover:text-primary-light transition-colors duration-300"
                                            onClick={() => handleSocialSignIn((signIn as any)[provider.signInMethod])}
                                        />
                                    );
                                })}
                            </div>
                            <div className="flex justify-center items-center text-center">
                                New to Swingers?&nbsp;<a href="/register" className="text-primary-light">Create an account</a>
                            </div>
                        </>
                    )}
                </Card>
                <Legal />
            </div>
        </Page>
    );
};

export default Login;
