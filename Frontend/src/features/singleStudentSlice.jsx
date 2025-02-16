import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleStudent: {},
};

export const fetchSingleStudent = createAsyncThunk(
    "singleStudent/fetch",
    async (id) => {
      try {
        const { data } = await axios.get(`/api/students/${id}`);
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );


const singleStudentSlice = createSlice({
    name: "singleStudent",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
            state.singleStudent = action.payload;
          });
      
    },
  });
  
  export default singleStudentSlice.reducer;