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

export const new_message = message => ({
    type: 'NEW_MESSAGE',
    payload: message
})

export const org_brand = brand => ({
    type: 'ORG_BRAND',
    payload: brand
})

export const set_color = color => ({
    type: 'SET_COLOR',
    payload: color
})