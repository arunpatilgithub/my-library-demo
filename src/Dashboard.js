import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';


const Dashboard = () => {
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>Welcome, {user.name}!</p>
        </div>
    );
};

export default Dashboard;
