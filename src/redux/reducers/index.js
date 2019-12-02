
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import statusReducer from './statusReducer';
import loadingReducer from './loadingReducer';

const allReducers = combineReducers({
    status: statusReducer,
    user: userReducer,
    loading: loadingReducer
});

export default allReducers;