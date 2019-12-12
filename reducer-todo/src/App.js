import React, {useReducer} from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";
import { reducer, initialState } from "./reducers";


function App() {
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
    <div className="App">
      <TodoContext.Provider value = {{...state, handleSubmit, handleToggle, clearCompleted}}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
