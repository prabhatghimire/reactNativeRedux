import { combineReducers } from "redux";
import {themeReducer} from './themeReducers';
import {userReducer} from './userReducers';


export default combineReducers({
    theme : themeReducer,
    user : userReducer
})
