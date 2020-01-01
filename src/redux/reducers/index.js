
import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import loadingReducer from './loadingReducer';
import messageReducer from './messageReducer';
import orgReducer from './orgReducer';

const allReducers = combineReducers({
    status: statusReducer,
    loading: loadingReducer,
    message: messageReducer,
    orgDetails: orgReducer,
});

export default allReducers;