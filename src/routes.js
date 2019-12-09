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
import LevelTwoHome from './views/level_2/LevelTwoHome';
import LevelThreeHome from './views/level_3/LevelThreeHome';
import OrgDetails from './views/admin/OrgDetails';
import AdminHome from './views/admin/AdminHome';
import AddHR from './views/admin/AddHR';
import AddNewEmp from './views/level_3/AddNewEmp';
import EditEmp from './views/level_3/EditEmp';

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
    {
        path: '/add-new-employee',
        component: AddNewEmp,
        title: 'New Employee',
        icon: <HomeIcon />
    },
    {
        path: '/edit-employee',
        component: EditEmp,
        title: 'Edit Employee',
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
        path: '/hr-manager',
        component: AddHR,
        title: 'HR Manager',
        icon: <HomeIcon />
    },
];