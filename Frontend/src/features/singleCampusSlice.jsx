import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    singleCampus:{}
}

export const fetchSingleCampus = createAsyncThunk(
    "singleCampus/fetch",
    async (id) => {
      try {
        const { data } = await axios.get(`/api/campuses/${id}`);
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );

  export const updateSingleCampus = createAsyncThunk(
    "campus/update",
    async ({ id, name, address, description }) => {
      try {
        const { data } = await axios.put(`/api/campuses/${id}`, {
          name,
          address,
          description,
        });
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );
  

export const deleteSingleCampus = createAsyncThunk(
    "campus/delete",
    async (id) => {
      try {
        const { data } = await axios.delete(`/api/campuses/${id}`);
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  );
  

const singleCampusSlice = createSlice({
    name: 'singleCampus',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
            state.singleCampus = action.payload;
          });
        builder.addCase(deleteSingleCampus.fulfilled, (state, action) => {
            state.singleCampus = {};
          });
        builder.addCase(updateSingleCampus.fulfilled, (state, action) => {
            state.singleCampus = action.payload;
          });

    }
})

export default singleCampusSlice.reducer