import React, { useState } from 'react';
import axios from 'axios';
import { Todo } from '../src/Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
      // console.log(res.data);
    });
  };

  return (
    <div className="App">
     <button onClick={onClickFetchData}>データ取得</button>
     {todos.map((todo) => (
       <Todo title={todo.title} userid={todo.userid}></Todo>
     ))}
    </div>
  );
}

export default App;
