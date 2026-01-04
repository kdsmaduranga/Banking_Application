import React, { useState } from 'react';
import axios from 'axios';
import { User, Lock, ChevronRight, Aperture } from 'lucide-react';

const PAGES = {
    HOME: 'home',
    CREATE_ACCOUNT: 'createAccount',
    DASHBOARD: 'dashboard' 
};

// >> The Spring Boot Endpoint for Login Validation
const LOGIN_URL = 'http://127.0.0.1:8080/api/auth/login';

const GenZLoginPage = ({ onNavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // 🛑 API Call to Spring Boot AuthController for validation against genz_account table
            const response = await axios.post(LOGIN_URL, {
                username: username,
                password: password,
            });

            if (response.status === 200 && response.data) {
                // Validation Successful: Navigate to dashboard
                // Construct user object structure expected by Dashboard
                const userData = {
                    fullName: response.data.fullName,
                    account: {
                        id: response.data.id,
                        fullName: response.data.fullName,
                        username: username
                    }
                };

                alert(`Login Successful! Welcome, ${userData.fullName}. Redirecting to Dashboard.`);

                // Save user data to localStorage immediately after login (with safe handling)
                try {
                    console.debug('Saving genz_user to localStorage', userData);
                    localStorage.setItem('genz_user', JSON.stringify(userData));
                    console.debug('Saved genz_user:', localStorage.getItem('genz_user'));
                } catch (storageErr) {
                    console.error('Failed to save genz_user to localStorage', storageErr);
                    setError('Login succeeded but could not persist session locally. Check browser storage settings.');
                }

                // Navigate, passing the full user data for the dashboard
                console.debug('Navigating to dashboard with userData', userData);
                onNavigate(PAGES.DASHBOARD, userData); 
            }

        } catch (err) {
            console.error('Login error:', err);
            let errorMessage = 'Login failed. Please try again.';
            if (err.response) {
                if (err.response.status === 401) errorMessage = 'Invalid username or password.';
                else if (err.response.status === 404) errorMessage = 'User not found.';
                else errorMessage = 'Server error. Check backend logs.';
            } else if (err.request) {
                errorMessage = 'Cannot connect to the bank server. Is Spring Boot running on port 8080?';
            }
            setError(errorMessage);
        }
    };

    return (
        <div className="login-page middle-content-main">
            <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
                <h1 className="page-title">
                    <Aperture size={30} className="mr-2" /> GenZ Online Banking: <span className="text-secondary">Next-Gen Finance</span>
                </h1>
                <p className="page-subtitle">Login to access your personalized, gamified financial dashboard.</p>
            </div>
            
            <form onSubmit={handleLogin} className="login-form-placeholder simple-form">
                <div className="form-body">
                    <h3 className="form-title">Secure Login</h3>
                    
                    {/* Username Field */}
                    <div className="input-group">
                        <label htmlFor="username">Username / Email</label>
                        <div className="input-with-icon">
                            <User size={20} className="input-icon" />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                className="form-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <Lock size={20} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Error Message */}
                    {error && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                </div>

                <div className="form-navigation">
                    <button 
                        type="submit" 
                        className="btn btn-primary nav-btn login-btn"
                    >
                        Login <ChevronRight size={20} />
                    </button>
                </div>
                
                {/* Link to Create Account */}
                <p className="mt-4 text-center">
                    Don't have an account? 
                    <button 
                        type="button"
                        onClick={() => onNavigate(PAGES.CREATE_ACCOUNT)}
                        className="btn btn-link ml-1" 
                    >
                        Create Your GenZ Account
                    </button>
                </p>
            </form>
        </div>
    );
};

export default GenZLoginPage;