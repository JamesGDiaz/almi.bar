import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer'
import authenticated from './checkLoginReducer'

const rootReducer = combineReducers({
  register,
  login,
  authenticated
});

export default rootReducer;