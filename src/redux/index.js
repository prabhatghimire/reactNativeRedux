
import {createStore} from 'redux';
import RootReducer from './reducers'


// export const Store = combineReducers({
//     theme : themeReducer,
//     user : userReducer
// });

export const Store = createStore(RootReducer);
