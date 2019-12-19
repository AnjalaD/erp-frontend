import React from 'react'
import { DIVIDER } from './constants/constants';
import HomeIcon from '@material-ui/icons/Home';

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import LevelOneHome from "./views/level_1/LevelOneHome";
import RouterError from "./views/shared/RouterError";
import UserProfile from "./views/level_1/UserProfile";
import LevelTwoHome from './views/level_2/LevelTwoHome';
import LevelThreeHome from './views/level_3/LevelThreeHome';
import OrgDetails from './views/admin/OrgDetails';
import AdminHome from './views/admin/AdminHome';
import AddHR from './views/admin/AddHR';
import AddNewEmp from './views/level_3/AddNewEmp';
import EditEmp from './views/level_2/EditEmp';
import ColourPicker from './components/settings/ColourPicker';
import FormFieldManager from './views/level_3/FormFieldManager';
import JobTitleManager from './views/level_3/JobTitleManager';
import PayGradeManager from './views/level_3/PayGradeManager';
import LeaveTypeManger from './views/level_3/LeaveTypeManger';
import LeaveLimitManager from './views/level_3/LeaveLimitManager';
import ApplyLeave from './views/level_1/ApplyLeave';
import ViewEmployees from './views/level_2/ViewEmployees';
import Reports from './views/level_3/Reports';
import RequestedLeaves from './views/supervisor/RequestedLeaves';
import SuperEmployees from './views/supervisor/SuperEmployees';
import LeaveHistory from './views/level_1/LeaveHistory';

export const supervisorRoutes = [
    {
        path: '/requested-leaves',
        component: RequestedLeaves,
        title: 'Requested Leaves',
        icon: <HomeIcon />
    },
    {
        path: '/employees-under-supervisor',
        component: SuperEmployees,
        title: 'Employees',
        icon: <HomeIcon />
    },
];

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
        path: '/colour',
        component: ColourPicker
    }
];

export const levelOneRoutes = [
    {
        path: '/',
        component: LevelOneHome,
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/userprofile',
        component: UserProfile,
        title: 'Profile',
        icon: <HomeIcon />
    },
    DIVIDER,
    {
        path: '/apply-leave',
        component: ApplyLeave,
        title: 'Apply Leave',
        icon: <HomeIcon />
    }, {
        path: '/my-leaves',
        component: LeaveHistory,
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
        path: '/user-profile',
        component: UserProfile,
        title: 'Profile',
        icon: <HomeIcon />
    },
    DIVIDER,
    {
        path: '/apply-leave',
        component: ApplyLeave,
        title: 'Apply Leave',
        icon: <HomeIcon />
    }, {
        path: '/my-leaves',
        component: LeaveHistory,
        title: 'My Leaves',
        icon: <HomeIcon />
    },
    DIVIDER,
    {
        path: '/view-all-employees',
        component: ViewEmployees,
        title: 'View Employees',
        icon: <HomeIcon />
    },
    {
        path: '/edit-employee',
        component: EditEmp,
        title: 'Edit Employee',
        icon: <HomeIcon />
    },
    DIVIDER,
    ...supervisorRoutes
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
        icon: <HomeIcon />
    },
    DIVIDER,
    {
        path: '/applyleave',
        component: ApplyLeave,
        title: 'Apply Leave',
        icon: <HomeIcon />
    }, {
        path: '/myleaves',
        component: LeaveHistory,
        title: 'My Leaves',
        icon: <HomeIcon />
    },
    DIVIDER,
    {
        path: '/view-all-employees',
        component: ViewEmployees,
        title: 'View Employees',
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
    DIVIDER,
    {
        path: 'reports',
        component: Reports.js,
        title: 'Reports',
        icon: <HomeIcon />
    },
    DIVIDER,
    ...supervisorRoutes
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

