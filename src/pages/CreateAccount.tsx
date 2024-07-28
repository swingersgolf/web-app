import { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const createAccount = async () => {
        try {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
    
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
        <div>
        <h1>Create Account</h1>
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={createAccount}>Create Account</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CreateAccount;
