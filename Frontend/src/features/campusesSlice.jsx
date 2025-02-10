import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAllCampuses = createAsyncThunk('campuses/fetch',async () =>{
    try{
        const {data} = await axios.get('/api/campuses');
        return data

    } catch(err){
        console.error(err)
    }
})

const initialState = {
    campuses:[]
}

const campusesSlice = createSlice({
    name: 'campuses',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchAllCampuses.fulfilled,(state,action) =>{
            state.campuses = action.payload
        })
    }
})


export default campusesSlice.reducer