// create slice(reducers)
// nanoid generate unique id

import { createSlice, nanoid } from "@reduxjs/toolkit";

// initialize state

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      updated: false,
      completed: false,
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
        updated: false,
        completed: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text} : todo
      );
    },

    toggleUpdate: (state, action) => {
      state.todos = state.todos.map((todo) =>
      todo.id === action.payload ? { ...todo, updated: !todo.updated } : todo);
    },

    toggledTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggledTodo, updateTodo, toggleUpdate } =
  todoSlice.actions;

export default todoSlice.reducer; // export reducer to store
