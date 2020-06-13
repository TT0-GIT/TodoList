import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { filterAll, filterProcess, filterDone } from '../actions';

const Category = () => {
  const category = useSelector(state => state.filterTodoReducer.category);
  const allItems = useSelector(state => state.handleTodoReducer.allItems);
  const dispatch = useDispatch();

  if (allItems.length !== 0) {
    return (
      <div className="category">
        <span className={category.color[0]} onClick={() => dispatch(filterAll())}>
          All
        </span>
        <span className={category.color[1]}  onClick={() => dispatch(filterProcess())}>
          Processing
        </span>
        <span className={category.color[2]}  onClick={() => dispatch(filterDone())}>
          Done
        </span>
      </div>
    );
  } else {
    return null;
  }
};

export default Category;
