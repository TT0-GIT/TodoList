import searchReducer from './searchReducer';
import handleTodoReducer from './handleTodoReducer';
import filterTodoReducer from './filterTodoReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    searchReducer: searchReducer,
    handleTodoReducer:handleTodoReducer,
    filterTodoReducer:filterTodoReducer
})

export default allReducers;