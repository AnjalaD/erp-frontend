import React from 'react'
import { DIVIDER } from './constants/constants';
import HomeIcon from '@material-ui/icons/Home';

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
import { faPaperclip, faStickyNote, faUsers, faUserAlt, faScroll, faUserEdit, faFileAlt, faUserPlus, faUniversity, faDotCircle, faUserTie, faFileInvoiceDollar, faBars, faBuilding, faHome, faUserTag, faArrowsAltH} from '@fortawesome/free-solid-svg-icons';



export const supervisorRoutes = [
    {
        path: '/requested-leaves',
        component: RequestedLeaves,
        title: 'Requested Leaves',
        icon: faPaperclip
    },
    {
        path: '/leaves-history',
        component: LeaveActionHistory,
        title: 'Leaves History',
        icon: faStickyNote
    },
    {
        path: '/employees-under-supervisor',
        component: SuperEmployees,
        title: 'My Supervisees',
        icon: faUsers
    },
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
        icon: faUserAlt
    },
    DIVIDER,
    {
        path: '/apply-leave',
        component: ApplyLeave,
        title: 'Apply Leave',
        icon: faPaperclip
    }, {
        path: '/my-leaves',
        component: LeaveHistory,
        title: 'My Leaves',
        icon: faScroll
    },
];

export const levelTwoRoutes = [
    ...levelOneRoutes,
    DIVIDER,
    {
        path: '/view-all-employees',
        component: ViewEmployees,
        title: 'View Employees',
        icon: faUsers
    },
    {
        path: '/edit-employee/:id',
        component: EditEmp,
        title: 'Edit Employee',
        icon: faUserEdit
    },
    DIVIDER,
    {
        path: '/reports',
        component: Reports,
        title: 'Reports',
        icon: faFileAlt
    },
    DIVIDER,
    ...supervisorRoutes
];

export const levelThreeRoutes = [
    ...levelOneRoutes,
    DIVIDER,
    {
        path: '/view-all-employees',
        component: ViewEmployees,
        title: 'View Employees',
        icon: faUsers
    },
    {
        path: '/add-new-employee',
        component: AddNewEmp,
        title: 'Add Employee',
        icon: faUserPlus
    },
    {
        path: '/edit-employee/:id',
        component: EditEmp,
        title: 'Edit Employee',
        icon: faUserEdit
    },
    DIVIDER,
    {
        path: '/departments',
        component: DepartmentManager,
        title: 'Departments',
        icon: faUniversity
    },
    {
        path: '/custom-form-fields',
        component: FormFieldManager,
        title: 'Custom Fields',
        icon: faDotCircle
    },
    {
        path: '/job-title',
        component: JobTitleManager,
        title: 'Job Titles',
        icon: faUserTie
    },
    {
        path: '/pay-grade',
        component: PayGradeManager,
        title: 'Pay Grades',
        icon: faFileInvoiceDollar
    },
    {
        path: '/leave-type',
        component: LeaveTypeManger,
        title: 'Leave Types',
        icon: faBars
    },
    {
        path: '/leave-limit',
        component: LeaveLimitManager,
        title: 'Leave Limits',
        icon: faArrowsAltH
    },
    {
        path: '/employement-status',
        component: EmpStatusManager,
        title: 'Employement Status',
        icon: faUserTag
    },
    DIVIDER,
    {
        path: '/reports',
        component: Reports,
        title: 'Reports',
        icon: faFileAlt
    },
    DIVIDER,
    ...supervisorRoutes
];

export const adminRoutes = [
    {
        path: '/',
        component: AdminHome,
        title: 'Home',
        icon: faHome
    },
    {
        path: '/org',
        component: OrgDetails,
        title: 'Organization',
        icon: faBuilding
    },
    {
        path: '/hr-manager',
        component: AddHR,
        title: 'HR Manager',
        icon: faUserPlus
    },
];

