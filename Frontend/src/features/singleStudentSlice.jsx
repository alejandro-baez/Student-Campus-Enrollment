import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleStudent: {},
};


const singleStudentSlice = createSlice({
    name: "singleStudent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
    },
  });
  
  export default singleStudentSlice.reducer;