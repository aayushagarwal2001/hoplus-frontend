import React, { useState } from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';

const AdminAddNewDoctor = () => {
    const [email,setEmail] = useState("abc@gmail.com");
    const handleSubmit = (e) =>{
        console.log("jacck")
        e.preventDefault()
    }
    return (
        <div className='book-appointment'>
            <h1>Doctor Details</h1>
            <hr />
            <form onSubmit={e => { handleSubmit(e) }} className='form-container'>
                <label htmlFor="email">Doctor Email: </label>
                <input type="email" value={email}  name='email' onChange={e =>{setEmail(e.target.value)}}/>
                <label htmlFor="">Contact Number: </label>
                <input type="text" name="" id="" />
                <label htmlFor="">Gender: </label>
                <select>
                    <option value="India">Male</option>
                    <option value="Other">Female</option>
                </select>
                <label htmlFor="">Country: </label>
                <select>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="">Educational Qualifications: </label>
                <input type="text" name="" id="" />
                <label htmlFor="">Address: </label>
                <textarea type="text" name="" id="" />
                <label htmlFor="">Description: </label>
                <textarea type="text" name="" id="" />
                <Button type='submit' className='btn-bookAppointment btn-primary'>Add Doctor</Button>
            </form>
        </div>
    )
}

export default AdminAddNewDoctor