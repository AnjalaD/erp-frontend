
import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import loadingReducer from './loadingReducer';

const allReducers = combineReducers({
    status: statusReducer,
    loading: loadingReducer
});

export default allReducers;