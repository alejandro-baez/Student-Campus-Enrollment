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

export const updateSingleStudent = createAsyncThunk(
    "student/update",
    async (updatedData) => {
      try {
        const {id, ...updateFields} = updatedData
        const { data } = await axios.put(`/api/students/${id}`, updateFields);
        
        console.log(data)
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );

export const deleteSingleStudent = createAsyncThunk(
    "student/delete",
    async (id) => {
      try {
        const { data } = await axios.delete(`/api/students/${id}`);
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
        builder.addCase(updateSingleStudent.fulfilled,(state,action)=>{
            state.singleStudent = action.payload
        })
        builder.addCase(deleteSingleStudent.fulfilled, (state, action) => {
            state.singleStudent = {};
          });
      
    },
  });
  
  export default singleStudentSlice.reducer;