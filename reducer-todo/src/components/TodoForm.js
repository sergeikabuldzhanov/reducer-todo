import React, { useState } from "react";

export default function TodoForm(props) {
  const [formValues, setFormValues] = useState({
    name: ""
  });
  const handleInput = event =>{
      setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
      })
  }
  return (
    <form onSubmit = {props.handleSubmit(formValues.name)}>
      <label>
        Add a todo:
        <input type="text" value = {formValues.name} name = "name" onChange = {handleInput}/>
      </label>
      <input type="submit" />
      <button type = "button" onClick = {props.clearCompleted}>Clear completed</button>
    </form>
  );
}
