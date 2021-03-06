import Cookies from 'js-cookie';

const initialState = {
    loggedIn: false,
    token: null,
    access_level: null,
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
            window.location.assign('/');
            return initialState;
        default:
            return state;
    }
}
