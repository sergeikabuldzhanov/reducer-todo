import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers";
import TodoForm from "./TodoForm";

export default function TodoList(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = name => event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: name });
  };

  const handleToggle = id => event => {      
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = event=>{
      dispatch({type: "CLEAR_COMPLETED"});
  }

  return (
    <div className="todo-list">
      {state.todos.map(element => (
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
