import Login from "./views/guest/Login";
import EmpHome from "./views/employee/EmpHome";

export const guestRoutes = [
    {
        path: '/',
        component: Login,
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