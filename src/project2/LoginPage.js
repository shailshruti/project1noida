import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic
        navigate('/configure');
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="login-form" style={{display:"flex",flexDirection:"column"}}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" style={{marginLeft:"70px"}}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
