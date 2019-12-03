import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import Navbar from "./views/guest/AppNavbar";
import LevelOneHome from "./views/level_1/LevelOneHome";

import HomeIcon from '@material-ui/icons/Home';
import RouterError from "./views/guest/RouterError"

export const guestRoutes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/load',
        component: Loading
    },
    {
        path: '/navbar',
        component: Navbar
    },
    {
        path: '/error',
        component: RouterError
    }
];

export const levelOneRoutes = [
    {
        path: '/',
        component: LevelOneHome,
        title: 'Home',
        icon: <HomeIcon />
    }
];

export const levelTwoRoutes = [

];

export const levelThreeRoutes = [

];

export const adminRoutes = [

];