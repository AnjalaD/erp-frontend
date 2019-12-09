import { LEVEL3, ADMIN } from "../../constants/constants";
import Cookies from 'js-cookie';

// const initialState = {
//     loggedIn: false,
//     token: null,
//     access_level: null,
// };

const initialState = {
    loggedIn: true,
    token: null,
    access_level: ADMIN,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                token: payload.erp_token,
                access_level: payload.access_level,
            };
        case 'LOGOUT':
            Cookies.remove('user');
            return initialState;
        default:
            return state;
    }
}
