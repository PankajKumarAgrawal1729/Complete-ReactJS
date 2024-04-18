// create slice(reducers)
// nanoid generate unique id

import { createSlice, nanoid } from "@reduxjs/toolkit";

// initialize state

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducer contains properties and function
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {

    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; // export reducer to store
