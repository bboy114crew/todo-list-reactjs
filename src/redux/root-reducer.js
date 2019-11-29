import { combineReducers } from 'redux';
import todoReducer from './todo/todo.reducer';
import searchReducer from './search/search.reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  search: searchReducer
});

export default rootReducer;