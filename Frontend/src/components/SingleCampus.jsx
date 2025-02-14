import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleCampus } from '../features/singleCampusSlice'


const SingleCampus = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const {campus} = useSelector((state) => state.singleCampus.singleCampus)
    

    useEffect(()=> {
        dispatch(fetchSingleCampus(id))
    },[dispatch])

  return (
    <section>
        {/* campus */}
        <div></div>
        

        {/* update form */}
        <div></div>

        {/* students */}
    </section>
  )
}

export default SingleCampus