import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputTodo, addTodo } from '../actions';

const Todo = () => {
    const text = useSelector(state => state.handleTodoReducer.item.text);
    const error = useSelector(state => state.handleTodoReducer.error);
    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => { e.preventDefault(); dispatch(addTodo()) }}>
            <input
                type="text"
                value={text}
                placeholder="Come on!!!"
                onChange={(e) => dispatch(inputTodo(e.target.value))}
            />
            <p>{error}</p>
        </form>
    )
}

export default Todo;

