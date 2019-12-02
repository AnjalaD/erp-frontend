const initialState = {
    loggedIn: false,
    user: {
        type: ''
    },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                user: payload.user,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
