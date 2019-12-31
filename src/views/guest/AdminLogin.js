import React from 'react';
import Login from './Login';

function AdminLogin() {
    return (
        <Login loginApi={AdminLogin} label='Admin Sign In' />
    )
}

export default AdminLogin;
