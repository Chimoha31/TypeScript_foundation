import React, { useState } from "react";
import axios from "axios";
import { Todo } from "../src/Todo";
import "./App.css";
import { TodoType } from '../src/types/todo';



const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}></Todo>
      ))}
    </div>
  );
};

export default App;
