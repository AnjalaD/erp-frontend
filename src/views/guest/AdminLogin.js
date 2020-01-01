import React from 'react';
import Login from './Login';
import { ADMIN_LOGIN } from '../../constants/api';

function AdminLogin() {
    return <Login loginApi={ADMIN_LOGIN} label='Admin Sign In' />
}

export default AdminLogin;
