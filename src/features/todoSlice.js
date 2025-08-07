import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todos: [],
  isCompleted: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },

    completeTodo(state, action) {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },

    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

console.log(todoSlice);
export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
