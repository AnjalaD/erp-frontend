import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import LevelOneHome from "./views/level_1/LevelOneHome";

import HomeIcon from '@material-ui/icons/Home';
import RouterError from "./views/shared/RouterError";
import { DIVIDER } from './constants/constants';
import UserForm from "./components/form/UserFormManager";
import UserProfile from "./views/shared/UserProfile";
import footer from './components/footer/footer';
import LevelTwoHome from './views/level_2/LevelTwoHome';
import LevelThreeHome from './views/level_3/LevelThreeHome';
import OrgDetails from './views/admin/OrgDetails';
import AdminHome from './views/admin/AdminHome';
import AddHR from './views/admin/AddHR';
import AddNewEmp from './views/level_3/AddNewEmp';
import EditEmp from './views/level_3/EditEmp';
import ColourPicker from './components/settings/ColourPicker';
import LeaveCheck from './views/shared/LeaveForm/LeaveCheck';
import LeaveForm from './views/shared/LeaveForm/LeaveForm';
import FormFieldManager from './views/level_3/FormFieldManager';
import JobTitleManager from './views/level_3/JobTitleManager';
import PayGradeManager from './views/level_3/PayGradeManager';
import LeaveTypeManger from './views/level_3/LeaveTypeManger';
import LeaveLimitManager from './views/level_3/LeaveLimitManager';
import ApplyLeave from './views/level_1/ApplyLeave';
import { Home } from '@material-ui/icons';

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
    },
    {
        path: '/colour',
        component: ColourPicker
    },
    {
        path: '/leavecheck',
        component: LeaveCheck
    },
    {
        path: '/leaveform',
        component: LeaveForm
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
        path: '/userprofile',
        component: UserProfile,
        title: 'Profile',
        icon: <Home />
    },
    {
        path: '/applyleave',
        component: ApplyLeave,
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
    {
        path: '/userprofile',
        component: UserProfile,
        title: 'Profile',
        icon: <Home />
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
        path: '/userprofile',
        component: UserProfile,
        title: 'Profile',
        icon: <Home />
    },
    DIVIDER,
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
    DIVIDER,
    {
        path: '/custom-form-fields',
        component: FormFieldManager,
        title: 'Custom Fields',
        icon: <HomeIcon />
    },
    {
        path: '/job-title',
        component: JobTitleManager,
        title: 'Job Titles',
        icon: <HomeIcon />
    },
    {
        path: '/pay-grade',
        component: PayGradeManager,
        title: 'Pay Grades',
        icon: <HomeIcon />
    },
    {
        path: '/leave-type',
        component: LeaveTypeManger,
        title: 'Leave Types',
        icon: <HomeIcon />
    }, {
        path: '/leave-limit',
        component: LeaveLimitManager,
        title: 'Leave Limits',
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