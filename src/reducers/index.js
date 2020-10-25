import { combineReducers } from 'redux';
import alert from './alert';
import movies from './movies'

export default combineReducers({
  alert,
  movies
});
