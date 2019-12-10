import { func } from "prop-types";

//Set up the initial state
export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
      item: "Use context to pass state",
      completed: false,
      id: 2
    },
    {
      item: "Do the stretchess",
      completed: false,
      id: 3
    }
  ]
};
//Declare action types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

//Write a reducer function

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            id: JSON.stringify(new Date()),
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id == action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case CLEAR_COMPLETED:
        return {
            ...state,
            todos: state.todos.filter(todo=>!todo.completed)
        }
    default:
      return state;
  }
}
