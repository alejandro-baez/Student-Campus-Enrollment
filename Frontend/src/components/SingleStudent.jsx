import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleStudent = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
  return (
    <div>SingleStudent</div>
  )
}

export default SingleStudent