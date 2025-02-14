import React, {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllCampuses, addCampus} from '../features/campusesSlice'
import { Link } from 'react-router-dom'

const Campuses = () => {
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [description,setDescription] = useState('')

    const dispatch = useDispatch()
    const campuses = useSelector((state) => state.campuses.campuses)
    console.log(campuses)

    const handleSubmitCreate = async (evt) => {
        evt.preventDefault();
        await dispatch(addCampus({ name, address,description }));
        setName("");
        setAddress("");
        setDescription('')
      };

    useEffect(()=>{
        dispatch(fetchAllCampuses())
    },[dispatch])

    return(
        <section className='section-container flex items-center justify-around'>
            {/* campuses */}
            <div>
                {
                    campuses.map((campus) =>(
                        <div key={campus.id} className='shadow-md px-8 py-8 mb-4 w-50'>
                            <h3>{campus.name}</h3>
                            <img src={campus.imageUrl} className='w-50'/>
                            <div>
                                {/* change to single campus */}
                                <Link to='/'>
                                    <p>Details for {campus.name}</p>
                                </Link>
                                <button className='bg-red-600 text-white w-4 border-black'>X</button>
                            </div>
                        </div>
                    ))}
            </div>

            {/* form add */}
            <div>
                <form onSubmit={handleSubmitCreate} className='flex flex-col shadow-md px-8 pb-8 mb-4 max-w-md mx-auto '>
                    <span className='text-lg font-semibold mb-4'>Add Campus</span>
                    <label htmlFor="name" className='label-form'> Name</label>
                    <input type="text" placeholder='name' value={name} onChange={e=>setName(e.target.value)} required='required' className='input-field'/>

                    <label htmlFor="address" className='label-form'> Address</label>
                    <input type="text" placeholder='address' value={address} onChange={e=> setAddress(e.target.value)} required='required' className='input-field'/>

                    <label htmlFor="description" className='label-form'>Description</label>
                    <input type="text" placeholder='description' value={description} onChange={e=> setDescription(e.target.value)} className='input-field'/>
                    <button type='submit' className='submit-btn'>Create</button>
                </form>
            </div>
        </section>
    )
}

export default Campuses