import React, {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllCampuses, addCampus} from '../features/campusesSlice'
import { deleteSingleCampus } from '../features/singleCampusSlice'
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
    
      const handleDelete = async (evt) => {
        evt.preventDefault();
        await dispatch(deleteSingleCampus(evt.target.value));
        await dispatch(fetchAllCampuses());
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
                        <Link to={`/campuses/${campus.id}`} key={campus.id} className='shadow-md space-y-1 px-8 py-8 mb-4 w-50 h-50 text-center flex flex-col justify-center hover:scale-105 duration-200 ease-in-out'>
                            <h3 className='font-semibold w-full text-center'>{campus.name}</h3>
                            <img src={campus.imageUrl} />
                            <div className='flex flex-col items-center'>
                                <p>{campus.description}</p>
                                <button onClick={handleDelete} value={campus.id} className='bg-red-400 h-5 w-5 flex items-center justify-center hover:cursor-pointer text-white  border-black hover:bg-red-600 mt-2 font-semibold shadow'>X</button>
                            </div>
                        </Link>
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
                    <button type='submit' className='submit-btn hover:scale-102 duration-200 ease-in-out'>Create</button>
                </form>
            </div>
        </section>
    )
}

export default Campuses