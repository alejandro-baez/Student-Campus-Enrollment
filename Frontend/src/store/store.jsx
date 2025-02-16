import {configureStore} from "@reduxjs/toolkit"
import campusesReducer from "../features/campusesSlice";
import singleCampusReducer from "../features/singleCampusSlice";
import studentsReducer from "../features/studentsSlice";
import singleStudentReducer from "../features/singleStudentSlice";

const store = configureStore({
    reducer:{
        campuses:campusesReducer,
        singleCampus: singleCampusReducer,
        students: studentsReducer,
        singleStudent:singleStudentReducer

    }
})

export default store;