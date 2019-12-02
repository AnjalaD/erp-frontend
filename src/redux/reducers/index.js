
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import statusReducer from './statusReducer';

const allReducers = combineReducers({
    status: statusReducer,
    user: userReducer,
});

export default allReducers;