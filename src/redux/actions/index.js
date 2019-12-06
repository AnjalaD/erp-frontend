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

export const add_user = (user) => ({
    type: 'SET_USER',
    payload: user
})

export const remove_user = () => ({
    type: 'REMOVE_USER'
})