import React, { useState } from "react";
import axios from "axios";
import { Todo } from "../src/Todo";
import { TodoType } from '../src/types/todo';
import { Text } from '../src/Text';
import { UserProfile } from '../src/UserPropfile';
import { User } from '../src/types/user';
import "./App.css";

const user: User = {
  name: "Chiho",
  hobbies: ["Piano", "Hiking"],
}


const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <UserProfile user={user}></UserProfile>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}></Todo>
      ))}
      <Text color="red" fontSize="20px"></Text>
    </div>
  );
};

export default App;
