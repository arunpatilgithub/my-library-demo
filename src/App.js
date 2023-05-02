import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';

const auth0Config = {
    domain: 'dev-ov65dogxcgywr7m0.us.auth0.com',
    clientId: 'WROWuJcZjkKaVzVvBBN1CGFsGLXodqjc',
    redirectUri: window.location.origin,
};

const App = () => {
    const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <div>
                {isAuthenticated ? (
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                        Logout
                    </button>
                ) : (
                    <button onClick={() => loginWithRedirect()}>Login</button>
                )}
            </div>
        </div>
    );
};

const WrappedApp = () => {
    return (
        <Auth0Provider {...auth0Config}>
            <App />
        </Auth0Provider>
    );
};

export default WrappedApp;
