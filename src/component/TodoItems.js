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

  return newItems.map(item => {
    if (item.isEdit) {
      return (
        <li key={item.key}>
          <div className="todo-item">
            <form onSubmit={e => { e.preventDefault(); dispatch(sortTodo()) }}>
              <input
                type="number"
                min="1"
                defaultValue={item.order}
                onChange={e => dispatch(inputOrder(e.target.value, item.key))}
                onBlur={e => { e.preventDefault(); dispatch(sortTodo()) }}
              />
            </form>
            <input
              onChange={e => dispatch(updateTodo(e.target.value, item.key))}
              defaultValue={item.text}
            />
            <div>
              <button onClick={() => dispatch(cancelEdit(item.key))}>cancel</button>
              <button onClick={() => dispatch(saveEdit(item.key))}>save</button>
              <button onClick={() => dispatch(delTodo(item.key))}>delete</button>
            </div>
          </div>
        </li>
      );
    } else if (item.isDone) {
      return (
        <li key={item.key}>
          <div className="todo-item">
            <form onSubmit={e => { e.preventDefault(); dispatch(sortTodo()) }}>
              <input
                type="number"
                min="1"
                defaultValue={item.order}
                onChange={e => dispatch(inputOrder(e.target.value, item.key))}
                onBlur={e => { e.preventDefault(); dispatch(sortTodo()) }}
              />
            </form>
            <span className="lineothrough"
              onClick={() => dispatch(markDone(item.key))}
            >
              {item.text}
            </span>
            <div>
              <button disabled>edit</button>
              <button onClick={() => dispatch(delTodo(item.key))}>delete</button>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li key={item.key}>
          <div className="todo-item">
            <form onSubmit={e => { e.preventDefault(); dispatch(sortTodo()) }}>
              <input
                type="number"
                min="1"
                defaultValue={item.order}
                onChange={e => dispatch(inputOrder(e.target.value, item.key))}
                onBlur={e => { e.preventDefault(); dispatch(sortTodo()) }}
              />
            </form>
            <span onClick={() => dispatch(markDone(item.key))}>{item.text}</span>
            <div>
              <button onClick={() => dispatch(editTodo(item.key))}>edit</button>
              <button onClick={() => dispatch(delTodo(item.key))}>delete</button>
            </div>
          </div>
        </li>
      );
    }
  });
};

export default TodoItems;
