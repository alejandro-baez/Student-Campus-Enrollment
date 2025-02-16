import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleStudent } from '../features/singleStudentSlice'
import { fetchAllCampuses } from '../features/campusesSlice'
import { Link } from 'react-router-dom'

const SingleStudent = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gpa,setGPA] = useState('')
    const [campus_id, setCampusId] = useState("");
    const [loading,setLoading] = useState(true)

    const {id} = useParams()
    const dispatch = useDispatch()
    const {student} = useSelector(state => state.singleStudent.singleStudent)
    console.log(student)
    
    const campuses = useSelector((state) => state.campuses.campuses);
    const studentCampus = campuses.filter((campus) => campus.id == student.campus_id);
    console.log(studentCampus)

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            await dispatch(fetchSingleStudent(id))
            await dispatch(fetchAllCampuses())
            setLoading(false)
        }
        fetchData()
    },[dispatch])

    if (loading || !student) {
        return <div>Loading...</div>; 
    }



  return (
    <section>
        {/* student*/}
        <div>
            <h1>{student.first_name} {student.last_name}</h1>
            <img src={student.imageUrl}/>
            <p>{student.email}</p>
            <div>
                <p>Attending: {studentCampus[0].name}</p>
                <p>GPA: {student.gpa}</p>

            </div>
        </div>

        {/* update form */}
        <div>
            <form>
                <span>Update Student</span>
                
                <label htmlFor="first name">First Name</label>
                <input type="text" />

                <label htmlFor="last name">Last Name</label>
                <input type="text" />

                <label htmlFor="email">Email</label>
                <input type="text" />

                <label htmlFor="gpa">GPA</label>
                <input type="text" />

                <button >Update</button>

            </form>
        </div>
    </section>
  )
}

export default SingleStudent