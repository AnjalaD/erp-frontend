import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import LevelOneHome from "./views/level_1/LevelOneHome";

import HomeIcon from '@material-ui/icons/Home';
import RouterError from "./views/shared/RouterError";
import { DIVIDER } from './constants/constants';
import UserProfile from "./views/shared/UserProfile";
import LevelTwoHome from './views/level_2/LevelTwoHome';
import LevelThreeHome from './views/level_3/LevelThreeHome';

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
];

export const levelOneRoutes = [
    {
        path: '/',
        component: LevelOneHome,
        title: 'Home',
        icon: <HomeIcon />
    },
    DIVIDER,
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
    {
        path: '/',
        component: LevelTwoHome,
        title: 'Home',
        icon: <HomeIcon />
    },
];

export const levelThreeRoutes = [
    {
        path: '/',
        component: LevelThreeHome,
        title: 'Home',
        icon: <HomeIcon />
    },
];

export const adminRoutes = [

];