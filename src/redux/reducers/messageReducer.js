export default (state = null, { type, payload }) => {

    switch (type) {
        case 'NEW_MESSAGE':
            console.log('new_message...')
            return payload
        default:
            return state
    }
}
