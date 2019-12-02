import Login from "./views/guest/Login";
import Loading from "./views/guest/Loading";
import Navbar from "./views/guest/AppNavbar";
import EmpHome from "./views/employee/EmpHome";

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
    }
];

export const levelOneRoutes = [
    {
        path: '/',
        component: EmpHome,
    }
];

export const levelTwoRoutes = [

];

export const levelThreeRoutes = [

];

export const adminRoutes = [

];