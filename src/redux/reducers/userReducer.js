const initialState = {
    loggedIn: false,
    user: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                user: payload.user,
            };
        case 'LOGOUT':
            return {
                loggedIn: false,
                user: null
            };
        default:
            return state;
    }
}
