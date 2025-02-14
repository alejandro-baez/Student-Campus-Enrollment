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

export const addCampus = createAsyncThunk('campuses/add', async ({name, address,description}) =>{
    try{    
        const {data} = await axios.post('/api/campuses',{name,address,description})
        return data

    }catch(err){
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
        builder.addCase(addCampus.fulfilled, (state,action)=>{
            state.campuses.push(action.payload)
        })
    }
})


export default campusesSlice.reducer