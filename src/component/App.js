import React from 'react';
import SearchBar from "./SearchBar";
import Todo from "./Todo";
import TodoItems from "./TodoItems";
import Category from "./Category";
import "./App.css";

function App() {

  return (
    <div className="App">
      <SearchBar />
      <ul>
        <TodoItems />
      </ul>
      <Category />
      <Todo />
    </div>
  );

}

export default App;
