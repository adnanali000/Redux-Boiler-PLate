import {combineReducers} from 'redux';
import auth_reducer from './authReducer';
import app_reducer from './appReducer';

export default combineReducers({
    auth: auth_reducer,
    app: app_reducer
})