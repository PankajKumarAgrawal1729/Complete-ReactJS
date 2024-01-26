import React from "react";
import AppName from "./components/AppName";
import Header from "./components/Header";
import TodoItem from "./components/Todoitem";
import Button from "./components/Button";
import "./style.css";

const App = () => {
  return (
    <div className="main-container">
      <AppName />
      <div className="todo-container">
        <Header header="Working Item"/>
        <TodoItem item="Eat" completed = {true}/>
        <TodoItem item="Learn"/>
        <TodoItem item = "Code"/>
        <TodoItem item="Sleep"/>
        <Button />
      </div>
    </div>
  );
};

export default App;
