import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleStudent,updateSingleStudent } from '../features/singleStudentSlice'
import { fetchAllCampuses } from '../features/campusesSlice'
import { Link } from 'react-router-dom'

const SingleStudent = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gpa,setGPA] = useState("")
    const [campus_id, setCampusId] = useState("");
    const [loading,setLoading] = useState(true)

    const {id} = useParams()
    const dispatch = useDispatch()
    const {student} = useSelector(state => state.singleStudent.singleStudent)

    const campuses = useSelector((state) => state.campuses.campuses);
    const studentCampus = student?.campus_id 
    ? campuses.filter((campus) => campus.id == student.campus_id) 
    : [];


    const handleUpdate = async (evt) => {
        evt.preventDefault();
        const updatedData = { id };
        if (first_name) updatedData.first_name = first_name;
        if (last_name) updatedData.last_name = last_name;
        if (gpa) updatedData.gpa = gpa;
        if (email) updatedData.email = email;
        if (campus_id) updatedData.campus_id = campus_id;
        await dispatch(
          updateSingleStudent(updatedData)
        );
        await dispatch(fetchSingleStudent(id));
        setFirstName("");
        setLastName("");
        setGPA('')
        setEmail("");
      };

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            await dispatch(fetchAllCampuses())
            await dispatch(fetchSingleStudent(id))
            setLoading(false)
        }
        fetchData()
    },[dispatch,id])

    if (loading || !student) {
        return <div>Loading...</div>; 
    }



  return (
    <section className='section-container flex flex-col items-center space-y-8'>
        {/* student*/}
        <div className='mt-5 text-center space-y-2 shadow-md px-8 py-4'>
            <h1 className='font-bold text-3xl'>{student.first_name} {student.last_name}</h1>
            <img src={student.imageUrl} />
            <p className='text-lg'>{student.email}</p>
            <div>
                <p><span className='font-semibold'>Attending:</span> {studentCampus[0]?.name ?  <Link to={`/campuses/${studentCampus[0].id}`}>{studentCampus[0].name}</Link>  : 'Student Not Currently Enrolled'}</p>
                <p><span className='font-semibold'>GPA:</span> {student.gpa}</p>

            </div>
        </div>

        {/* update form */}
        <div className='w-[100%]'>
            <form className='form-section text-center space-y-1' onSubmit={handleUpdate}>
                <span className='font-bold text-lg'>Update Student</span>
                
                <label htmlFor="first name">First Name</label>
                <input type="text" className='input-field text-center' value={first_name} onChange={e=>setFirstName(e.target.value)} />

                <label htmlFor="last name">Last Name</label>
                <input type="text" className='input-field text-center' value={last_name} onChange={e=>setLastName(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="text" className='input-field text-center'value={email} onChange={e=>setEmail(e.target.value)}/>

                <label htmlFor="gpa">GPA</label>
                <input type="text" className='input-field text-center' value={gpa} onChange={e=>setGPA(parseFloat(e.target.value))} />

                <label>Campus</label>
                <select className='input-field text-center' onChange={e=>setCampusId(parseInt(e.target.value))}>
                    <option>Switch Campus</option>
                    {campuses.map(campus=>(
                        <option value={campus.id} key={campus.id}>{campus.name}</option>
                    ))}
                </select>

                <button className='submit-btn' >Update</button>

            </form>
        </div>
    </section>
  )
}

export default SingleStudent