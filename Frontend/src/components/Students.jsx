import React,{useEffect,useState} from 'react'
import { fetchAllStudents } from '../features/studentsSlice'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students)
    console.log(students)

    useEffect(()=>{
        dispatch(fetchAllStudents())
    },[dispatch])

  return (
    <section>

    </section>
  )
}

export default Students