export const login = (status) => ({
    type: 'LOGIN',
    payload: status
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const loading = (isLoading = true) => ({
    type: 'SET_LOADING',
    payload: isLoading
});