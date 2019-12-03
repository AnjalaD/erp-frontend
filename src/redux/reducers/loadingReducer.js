export default (state = false, { type, payload }) => {
    switch (type) {
        case 'SET_LOADING':
            return payload
        default:
            return state
    }
}
