import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllCampuses} from '../features/campusesSlice'

const Campuses = () => {
    const dispatch = useDispatch()
    const campuses = useSelector((state) => state.campuses.campuses)
    console.log(campuses)

    useEffect(()=>{
        dispatch(fetchAllCampuses())
    },[dispatch])

    return(
        <div>
            <p>Campuses</p>
        </div>
    )
}

export default Campuses