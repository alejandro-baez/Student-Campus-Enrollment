import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleStudent } from '../features/singleStudentSlice'

const SingleStudent = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {student} = useSelector(state => state.singleStudent.singleStudent)
    

    useEffect(()=>{
        dispatch(fetchSingleStudent(id))
    },[dispatch])


  return (
    <div>SingleStudent</div>
  )
}

export default SingleStudent