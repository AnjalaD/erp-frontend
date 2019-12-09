import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import LevelOneHome from "./views/level_1/LevelOneHome";

import HomeIcon from '@material-ui/icons/Home';
import RouterError from "./views/shared/RouterError";
import { DIVIDER } from './constants/constants';
import UserProfile from "./views/shared/UserProfile";
import UserForm from "./views/guest/UserForm";
import footer from './components/footer/footer';

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
        path: '/error',
        component: RouterError
    },
    {
        path: '/userprofile',
        component: UserProfile
    },
    {
        path: '/form',
        component: UserForm
    },
    {
        path: '/footer',
        component: footer
    }
];

export const levelOneRoutes = [
    DIVIDER,
    {
        path: '/',
        component: LevelOneHome,
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/applyleave',
        component: LevelOneHome,
        title: 'Apply Leave',
        icon: <HomeIcon />
    }, {
        path: '/myleaves',
        component: LevelOneHome,
        title: 'My Leaves',
        icon: <HomeIcon />
    },
];

export const levelTwoRoutes = [
];

export const levelThreeRoutes = [

];

export const adminRoutes = [

];