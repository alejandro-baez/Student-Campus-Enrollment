import {configureStore} from "@reduxjs/toolkit"
import campusesReducer from "../features/campusesSlice";
import singleCampusReducer from "../features/singleCampusSlice";

const store = configureStore({
    reducer:{
        campuses:campusesReducer,
        singleCampus: singleCampusReducer,

    }
})

export default store;