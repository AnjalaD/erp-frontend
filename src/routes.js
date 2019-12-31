import React from 'react'

import Login from "./views/guest/Login";
import Loading from "./views/shared/Loading";
import RouterError from "./views/shared/RouterError";
import UserProfile from "./views/level_1/UserProfile";
import OrgDetails from './views/admin/OrgDetails';
import AdminHome from './views/admin/AdminHome';
import AddHR from './views/admin/AddHR';
import AddNewEmp from './views/level_3/AddNewEmp';
import EditEmp from './views/level_2/EditEmp';
import ColourChanger from './components/settings/ColourChanger';
import FormFieldManager from './views/level_3/FormFieldManager';
import JobTitleManager from './views/level_3/JobTitleManager';
import PayGradeManager from './views/level_3/PayGradeManager';
import LeaveTypeManger from './views/level_3/LeaveTypeManger';
import LeaveLimitManager from './views/level_3/LeaveLimitManager';
import ApplyLeave from './views/level_1/ApplyLeave';
import ViewEmployees from './views/level_2/ViewEmployees';
import Reports from './views/level_2/Reports';
import RequestedLeaves from './views/supervisor/RequestedLeaves';
import SuperEmployees from './views/supervisor/SuperEmployees';
import LeaveHistory from './views/level_1/LeaveHistory';
import DepartmentManager from './views/level_3/DepartmentManager';
import LeaveActionHistory from './views/supervisor/LeaveActionHistory';
import EmpStatusManager from './views/level_3/EmpStatusManager';
import NestedList from './components/navbar/NestedList'
import { faPaperclip, faStickyNote, faUsers, faScroll, faUserEdit, faFileAlt, faUserPlus, faUniversity, faDotCircle, faUserTie, faFileInvoiceDollar, faBars, faBuilding, faHome, faUserTag, faArrowsAltH, faUser, faTasks, faPager, faEye, faUserCircle} from '@fortawesome/free-solid-svg-icons';



export const supervisorRoutes = [
    {
        title: 'Supervise',
        icon: faEye,
        root: false,
        children: [
            {
                path: '/requested-leaves',
                component: RequestedLeaves,
                title: 'Requested Leaves',
                root: true,
                icon: faPaperclip
            },
            {
                path: '/leaves-history',
                component: LeaveActionHistory,
                title: 'Leaves History',
                root: true,
                icon: faStickyNote
            },
            {
                path: '/employees-under-supervisor',
                component: SuperEmployees,
                title: 'My Supervisees',
                root: true,
                icon: faUsers
            }]
    }
];

export const guestRoutes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/nest',
        component: NestedList
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
        component: ColourChanger
    }
];

export const levelOneRoutes = [
    {
        path: '/userprofile',
        component: UserProfile,
        title: 'My Profile',
        root: true,
        icon: faUserCircle
    },
    {
        title: 'Leave',
        icon: faPager,
        root: false,
        children: [
            {
                path: '/apply-leave',
                component: ApplyLeave,
                title: 'Apply Leave',
                root: true,
                icon: faPaperclip
            }, {
                path: '/my-leaves',
                component: LeaveHistory,
                title: 'My Leaves',
                root: true,
                icon: faScroll
            }]
    }
];

export const levelTwoRoutes = [
    ...levelOneRoutes,
    
    {
        title: 'Employee',
        icon: faUser,
        root: false,
        children: [
            {
                path: '/view-all-employees',
                component: ViewEmployees,
                title: 'View Employees',
                root: true,
                icon: faUsers
            },
            {
                path: '/edit-employee/:id',
                component: EditEmp,
                title: 'Edit Employee',
                root: true,
                icon: faUserEdit
            }]
},
    
    {
        path: '/reports',
        component: Reports,
        title: 'Reports',
        root: true,
        icon: faFileAlt
    },
    ...supervisorRoutes
];

export const levelThreeRoutes = [
    ...levelOneRoutes,
    {
        title: 'Employee',
        icon: faUser,
        root: false,
        children: [
            {
                path: '/view-all-employees',
                component: ViewEmployees,
                title: 'View Employees',
                root: true,
                icon: faUsers
            },
            {
                path: '/add-new-employee',
                component: AddNewEmp,
                title: 'Add Employee',
                root: true,
                icon: faUserPlus
            },
            {
                path: '/edit-employee/:id',
                component: EditEmp,
                title: 'Edit Employee',
                root: true,
                icon: faUserEdit
            }]
    },
    {
        title: 'Management',
        icon: faTasks,
        root: false,
        children: [
            {
                path: '/departments',
                component: DepartmentManager,
                title: 'Departments',
                root: true,
                icon: faUniversity
            },
            {
                path: '/custom-form-fields',
                component: FormFieldManager,
                title: 'Custom Fields',
                root: true,
                icon: faDotCircle
            },
            {
                path: '/job-title',
                component: JobTitleManager,
                title: 'Job Titles',
                root: true,
                icon: faUserTie
            },
            {
                path: '/pay-grade',
                component: PayGradeManager,
                title: 'Pay Grades',
                root: true,
                icon: faFileInvoiceDollar
            },
            {
                path: '/leave-type',
                component: LeaveTypeManger,
                title: 'Leave Types',
                root: true,
                icon: faBars
            },
            {
                path: '/leave-limit',
                component: LeaveLimitManager,
                title: 'Leave Limits',
                root: true,
                icon: faArrowsAltH
            },
            {
                path: '/employement-status',
                component: EmpStatusManager,
                title: 'Employement Status',
                root: true,
                icon: faUserTag
            }]
    },
    {
        path: '/reports',
        component: Reports,
        title: 'Reports',
        root: true,
        icon: faFileAlt
    },
    ...supervisorRoutes
];

export const adminRoutes = [
    {
        path: '/',
        component: AdminHome,
        title: 'Home',
        root: true,
        icon: faHome
    },
    {
        path: '/org',
        component: OrgDetails,
        title: 'Organization',
        root: true,
        icon: faBuilding
    },
    {
        path: '/hr-manager',
        component: AddHR,
        title: 'HR Manager',
        root: true,
        icon: faUserPlus
    },
];

