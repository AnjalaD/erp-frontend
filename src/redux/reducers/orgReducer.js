export default (state = 'ERP', { type, payload }) => {
    switch (type) {
        case 'ORG_BRAND':
            return payload
        default:
            return state
    }
}