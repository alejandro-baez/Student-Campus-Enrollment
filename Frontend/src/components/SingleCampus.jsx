import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleCampus } from '../features/singleCampusSlice'


const SingleCampus = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const campus = useSelector((state) => state.singleCampus.singleCampus.campus)
    const [loading,setLoading] = useState(true)
    console.log(campus)
    
    useEffect(()=> {
        const fetchData = async () =>{
            setLoading(true)
            dispatch(fetchSingleCampus(id))
            setLoading(false)
        }

        fetchData()
    },[dispatch,id])

    if (loading || !campus) {
        return <div>Loading...</div>; // Prevents errors on first render
    }

  return (
    <section className='section-container flex flex-col align items-center space-y-8'>
        {/* campus */}
        <div className='mt-5 text-center space-y-2 shadow-md px-8 py-4'>
            <h1 className='font-bold text-3xl'>{campus.name}</h1>
            <img className='w-170' src={campus.imageUrl}/>
            <p className='text-lg'>{campus.address}</p>
            <p className='text-lg'>{campus.description}</p>
        </div>


        {/* update form */}
        <div className='w-[100%]'>
            <form className='form-section text-center space-y-1' >
                <span className='font-bold text-lg'>Update Campus</span>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='name' className=' input-field text-center' />

                <label htmlFor="address">Address</label>
                <input type="text" placeholder='address'className=' input-field text-center' />
                
                <label htmlFor="description">Description</label>
                <input type="text" placeholder='description' className=' input-field text-center' />

                <button className='submit-btn'>Update</button>
            </form>
        </div>

        {/* students */}
    </section>
  )
}

export default SingleCampus