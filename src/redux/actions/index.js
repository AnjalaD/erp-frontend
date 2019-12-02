export const login = (status) => ({
    type: 'LOGIN',
    payload: status
});

export const logout = () => ({
    type: 'LOGOUT'
});