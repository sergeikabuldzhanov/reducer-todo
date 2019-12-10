import React, { useReducer, useContext } from "react";
import { reducer, initialState } from "../reducers";
import TodoForm from "./TodoForm";
import TodoContext from '../contexts/TodoContext';

export default function TodoList(props) {
    const {todos, handleSubmit, handleToggle, clearCompleted} = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map(element => (
        <p
          style = {{textDecoration: element.completed ? "line-through" : "none"}} 
          onClick={handleToggle(element.id)} key={element.id}>
          {element.item}
        </p>
      ))}
      <TodoForm handleSubmit={handleSubmit} clearCompleted = {clearCompleted}/>
    </div>
  );
}
