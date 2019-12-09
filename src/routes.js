import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import LevelOneHome from "./views/level_1/LevelOneHome";

import HomeIcon from '@material-ui/icons/Home';
import RouterError from "./views/shared/RouterError";
import { DIVIDER } from './constants/constants';
import UserProfile from "./views/shared/UserProfile";
<<<<<<< HEAD
import UserForm from "./views/guest/UserForm";
import footer from './components/footer/footer';
=======
import LevelTwoHome from './views/level_2/LevelTwoHome';
import LevelThreeHome from './views/level_3/LevelThreeHome';
import OrgDetails from './views/admin/OrgDetails';
import AdminHome from './views/admin/AdminHome';
import AddHR from './views/admin/AddHR';
>>>>>>> 2e55c51e7f27dccd02b670b64371124e2c037f80

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
    {
        path: '/',
        component: AdminHome,
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/org',
        component: OrgDetails,
        title: 'Organization',
        icon: <HomeIcon />
    },
    {
        path: '/add-hr',
        component: AddHR,
        title: 'Add HR Manager',
        icon: <HomeIcon />
    },
];