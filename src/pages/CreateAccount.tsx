import { useState } from 'react';
import axios from 'axios';
import Page from './Page';
import Card from '../components/Card';
import BannerLogo from '../assets/branding/BannerLogo.svg';
import TextButton from '../components/TextButton';
import Legal from '../components/Legal';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    
    const createAccount = async () => {
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
        <Page id="sign-in">
            <div className="trapezoid-background bg-dark-green"/>
            <div id="sign-in-content" className="flex flex-col justify-start gap-y-8 py-16">
                <img src={BannerLogo} alt="banner-logo" className="w-40"/>
                <Card id="sign-in-form" className="w-form-card h-fit gap-y-8">
                    <h3>Create your account</h3>
                    <div className="flex flex-col">
                        <p>Email</p>
                        <input
                            className="w-full"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />   
                    </div> 
                    <div className="flex flex-col">
                        <p>Full name</p>
                        <input
                            className="w-full"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />   
                    </div> 
                    <div className="flex flex-col">
                        <p>Password</p>
                        <input
                            className="w-full"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />   
                    </div>
                    <p>By clicking create account you are agreeing to follow our
                         <a className='text-dark-green' href='/privacy-policy'> privacy policy</a> and <a className='text-dark-green' href='/terms-conditions'>terms and conditions</a>.
                    </p>    
                    <TextButton text="Create account" onClick={createAccount}/>
                    <div className="flex justify-center items-center text-center">
                        Already have an account?&nbsp;<a href="/sign-in" className="text-light-green">Sign in</a>
                    </div>
                </Card>
                <Legal/>
            </div>
        </Page>
    );
};

export default CreateAccount;
