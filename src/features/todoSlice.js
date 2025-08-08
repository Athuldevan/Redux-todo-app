import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  input: "",
  todos: [],
  isCompleted: false,
 status : "fetching",
 posts : [],
};

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async function () {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await resp.data;
  console.log(data);
  return data;
});

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
  extraReducers(builder) {
    builder
    .addCase(fetchTodo.pending, (state, action)=>{
      state.status = "loading"
      
    })
    .addCase(fetchTodo.fulfilled, (state, action)=> {
      state.status = "fullfilled"
      state.posts = [...state.posts, action.payload]

   })

   .addCase(fetchTodo.rejected, (state,action) =>{
    state.status = "failed"
   })

  }

});


export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
