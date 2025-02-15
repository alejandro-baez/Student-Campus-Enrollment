import React,{useEffect,useState} from 'react'
import { fetchAllStudents } from '../features/studentsSlice'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCampuses } from '../features/campusesSlice'


const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students)
    const campuses = useSelector(state => state.campuses.campuses)
    console.log(campuses)

    useEffect(()=>{
        dispatch(fetchAllStudents())
        dispatch(fetchAllCampuses())
    },[dispatch])

  return (
    <section className='section-container flex items-center justify-around'>
        {/* all students */}
        <div>
            {
                students.map((student)=>(
                    <Link to={`/students`} key={student.id} className='card-section flex flex-col items-center'>
                        <h3 className='font-semibold w-full text-center'>{student.first_name} {student.last_name}</h3>
                        <img src={student.imageUrl} alt="Default student picture" />
                        <p className='pt-1'>{student.email}</p>
                        <button className='bg-red-400 h-5 w-5 flex items-center justify-center hover:cursor-pointer text-white  border-black hover:bg-red-600 mt-1 font-semibold shadow'>X</button>
                    </Link>
                ))
            }
        </div>
        {/* add student form */}
        <div>
            <form className='form-section'>
                <span className='text-lg font-semibold mb-4'>Add Student</span>
                <label htmlFor="first-name" className='label-form'>First Name</label>
                <input className='input-field' type='text'/>

                <label htmlFor="last-name" className='label-form'>Last Name</label>
                <input className='input-field' type='text'/>

                <label htmlFor="last-name" className='label-form'>Email</label>
                <input className='input-field' type='text'/>

                <label htmlFor="last-name" className='label-form'>Campus</label>
                <select className='input-field'>
                    {
                        campuses.map(campus=>(
                            <option value={campus.id} key={campus.id}>{campus.name}</option>
                        ))
                    }
                </select>

                <button className='submit-btn hover:scale-102 duration-200 ease-in-out' type='submit'>Create</button>
            </form>


        </div>
    </section>
  )
}

export default Students