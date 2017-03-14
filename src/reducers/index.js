import { combineReducers } from 'redux';
import SystemDataReducer from './reducer_systemdata';

const rootReducer = combineReducers({
    systemdata: SystemDataReducer
});

export default rootReducer;
