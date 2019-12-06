import { TEST_USER_DATA } from "../../testData";

const initialState = TEST_USER_DATA;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_USER':
            return payload
        case 'REMOVE_USER':
            return null;
        default:
            return state;
    }
}
