import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { delTodo, editTodo, updateTodo, saveEdit, cancelEdit, markDone, inputOrder, sortTodo } from "../actions";

const TodoItems = () => {
  const allItems = useSelector(state => state.handleTodoReducer.allItems);
  const category = useSelector(state => state.filterTodoReducer.category);
  const searchText = useSelector(state => state.searchReducer.searchText);
  const dispatch = useDispatch();

  let items;
  switch (category.content) {
    case "doneItems":
      items = allItems.filter(item => item.isDone === true);
      break;
    case "processItems":
      items = allItems.filter(item => item.isDone === false);
      break;
    default:
      items = allItems;
      break;
  }

  let newItems = items.filter(item => item.text.indexOf(searchText) !== -1);

  return newItems.map(item => (
    <li key={item.key}>
      <div className="todo-item">
        <input
          type="number"
          min="1"
          defaultValue={item.order}
          onChange={e => dispatch(inputOrder(e.target.value, item.key))}
          onBlur={() => dispatch(sortTodo())}
          onKeyPress={() => dispatch(sortTodo())}
        />
        <span
          className={(item.isEdit && item.isDone === false) ? "none" : (item.isEdit === false && item.isDone) ? "block line-through" : ""}
          onClick={() => dispatch(markDone(item.key))}
        >{item.text}</span>
        <input
          className={item.isEdit ? "block" : "none"}
          onChange={e => dispatch(updateTodo(e.target.value, item.key))}
          defaultValue={item.text}
        />
        <div>
        <button className={item.isEdit ? "block" : "none"} onClick={() => dispatch(cancelEdit(item.key))}>cancel</button>
        <button className={item.isEdit ? "block" : "none"} onClick={() => dispatch(saveEdit(item.key))}>save</button>
        <button className={item.isEdit ? "none" : "block"} disabled={item.isDone} onClick={() => dispatch(editTodo(item.key))}>edit</button>
        <button onClick={() => dispatch(delTodo(item.key))}>delete</button>
        </div>
      </div>
    </li>
  ))
};

export default TodoItems;
