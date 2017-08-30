import { combineReducers } from 'redux';
import UserReducer from './users_reducer'


const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;
