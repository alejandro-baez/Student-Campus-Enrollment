import {configureStore} from "@reduxjs/toolkit"
import campusesReducer from "../features/campusesSlice";

const store = configureStore({
    reducer:{
        campuses:campusesReducer

    }
})

export default store;