import { Colours } from "../../components/settings/Colours"

export default (state = Colours[0], { type, payload }) => {
    switch (type) {
        case 'SET_COLOR':
            return Colours[payload]
        default:
            return state
    }
}