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
import { faPaperclip, faStickyNote, faUsers, faScroll, faUserEdit, faFileAlt, faUserPlus, faUniversity, faDotCircle, faUserTie, faFileInvoiceDollar, faBars, faBuilding, faHome, faUserTag, faArrowsAltH, faUser, faTasks, faPager, faEye, faUserCircle, faKey, faUserCog, faPaste } from '@fortawesome/free-solid-svg-icons';
import LeaveReports from './views/level_2/LeaveReports';
import RegisterEmployee from "./views/level_3/RegisterEmployee";
import ResetPassword from "./views/level_3/ResetPassword";
import AdminLogin from "./views/guest/AdminLogin";
import Welcome from "./views/shared/Welcome";

const reports = {
    title: 'Reports',
    icon: faFileAlt,
    root: false,
    children: [
        {
            path: '/employee-reports',
            component: Reports,
            title: 'Employee Reports',
            root: true,
            icon: faUserCog
        },
        {
            path: '/leave-reports',
            component: LeaveReports,
            title: 'Leave Reports',
            root: true,
            icon: faPaste
        },
    ]
};

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
        component: Login,
        root: true
    },
    {
        path: '/login-admin',
        component: AdminLogin,
        root: true
    },
    {
        path: '/load',
        component: Loading,
        root: true
    },
    {
        path: '/error',
        component: RouterError,
        root: true
    },
    {
        path: '/colour',
        component: ColourChanger,
        root: true
    }
];

export const levelOneRoutes = [
    {
        path: '/',
        component: Welcome,
        title: 'Home',
        root: true,
        icon: faHome
    },
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
    reports,
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
            },
            {
                path: '/register-employee',
                component: RegisterEmployee,
                title: 'Register User',
                root: true,
                icon: faUserTag
            },
            {
                path: '/user-pass-reset',
                component: ResetPassword,
                title: 'Reset Password',
                root: true,
                icon: faKey
            }
        ]
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
    reports,
    ...supervisorRoutes
];

export const adminRoutes = [
    {
        path: '/',
        component: Welcome,
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

