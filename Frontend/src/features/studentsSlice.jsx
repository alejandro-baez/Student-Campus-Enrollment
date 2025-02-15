import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: []
}

const studentsSlice = createSlice({
    name:'students',
    initialState,
    reducers:{},

})

export default studentsSlice.reducer

