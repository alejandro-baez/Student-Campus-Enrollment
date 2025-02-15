import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    students: []
}

export const fetchAllStudents = createAsyncThunk("students/fetch", async () => {
    try {
      const { data } = await axios.get("/api/students");
      return data;
    } catch (err) {
      console.error(err);
    }
  });

export const addStudent = createAsyncThunk("students/add", async ({ first_name, last_name, email,gpa, campus_id }) => {
      try {
        const { data } = await axios.post("/api/students", {
          first_name,
          last_name,
          email,
          gpa,
          campus_id,
        });
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );
  

const studentsSlice = createSlice({
    name:'students',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
            state.students = action.payload;
          });
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.students.push(action.payload);
          });
    }

})

export default studentsSlice.reducer

