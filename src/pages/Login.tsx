import Card from "@components/Card.tsx";
import Page from "@pages/Page.tsx";
import BannerLogo from "@assets/branding/BannerLogo.svg";
import TextButton from "@components/buttons/TextButton.tsx";
import Legal from "@components/Legal.tsx";
import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/users', {
                email,
                password,
            });
        
            console.log(response.data);
        } catch (error) {
            setError((error as any).response.data.message);
        }
    };

    return (
        <Page id="login">
            <div className="trapezoid-background bg-dark-green"/>
            <div id="login-content" className="flex flex-col justify-start gap-y-8 py-16">
                <img src={BannerLogo} alt="banner-logo" className="w-40"/>
                <Card id="sign-in-form" className="w-form-card h-fit gap-y-8">
                    <h3>Sign in to your account</h3>
                    <div>
                        <p>Email</p>
                        <input
                            className="w-full"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />                     </div>
                    <div>
                        <div className="flex flex-row justify-between items-center">
                            <p>Password</p>
                            <a href="/forgot-password" className="text-light-green">Forgot your password?</a>
                        </div>
                        <input
                            className="w-full"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />                     </div>                    
                    <TextButton text="Sign In" onClick={handleSignIn}/>
                    <div className="flex justify-center items-center text-center">
                        New to Swingers?&nbsp;<a href="/register" className="text-light-green">Create an account</a>
                    </div>
                </Card>
                <Legal/>
            </div>
        </Page>
    );
}

export default Login;
