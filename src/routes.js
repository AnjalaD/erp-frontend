import Login from "./views/guest/Login";
import Loading from "./views/guest/Loading";
import Navbar from "./views/guest/AppNavbar";

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

export const employeeRoutes = [

];

export const hrRoutes = [

];

export const adminRoutes = [

];