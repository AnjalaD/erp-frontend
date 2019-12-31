
import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import loadingReducer from './loadingReducer';
import messageReducer from './messageReducer';

const allReducers = combineReducers({
    status: statusReducer,
    loading: loadingReducer,
    message: messageReducer,
});

export default allReducers;