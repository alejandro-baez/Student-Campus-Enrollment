import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    singleCampus:{}
}

const singleCampusSlice = createSlice({
    name: 'singleCampus',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{

    }
})

export default singleCampusSlice.reducer