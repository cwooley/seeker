import { combineReducers } from 'redux';
import UserReducer from './users_reducer'
import CompaniesReducer from './companies_reducer'

const rootReducer = combineReducers({
  user: UserReducer,
  company: CompaniesReducer
});

export default rootReducer;
