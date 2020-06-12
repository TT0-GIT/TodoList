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
        <span onClick={() => dispatch(filterAll())} style={{ color: category.color[0] }}>
          All
        </span>
        <span onClick={() => dispatch(filterProcess())} style={{ color: category.color[1] }}>
          Processing
        </span>
        <span onClick={() => dispatch(filterDone())} style={{ color: category.color[2] }}>
          Done
        </span>
      </div>
    );
  } else {
    return null;
  }
};

export default Category;
