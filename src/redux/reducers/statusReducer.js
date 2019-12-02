const initialState = {
    loggedIn: false,
    token: null,
    type: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                token: payload.erp_token,
                type: payload.user_type,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
