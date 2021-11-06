import React from 'react';
import './App.css';
import { UserCard } from '../src/components/UserCard';

const user = {
  id: 3,
  name: "Chiho",
  email: "1234@gmail.com",
  address: "vanvouver 123 8th Ave",
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px",
};

 export default function App() {
  return (
    <div style={style} className="App">
      <UserCard user={user}/>
    </div>
  );
};

