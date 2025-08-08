import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: "",
};

 export const fetchPost = createAsyncThunk("post/fetchPost", async function () {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  console.log(data);
  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // when request is pending
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.status = "failed";
        state.error = "Soemthing went wrong";
      });
  },
}); 

console.log(postSlice);
export default postSlice.reducer;
