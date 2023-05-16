import React, { useState } from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AdminAddNewDoctor = () => {
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [gender,setGender] = useState("male");
    const [userName,setUserName] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault()
        var token = localStorage.getItem("auth-token");
        const loginResponse = await axios.post("http://localhost:4040/api/doctor/create",{username : userName,mobileNumber : phoneNumber,gender: gender,email: email},{headers: { Authorization: `Bearer ${token}`}});
        console.log(loginResponse)  
        
    }
    return (
        <div className='book-appointment'>
            <h1>Doctor Details</h1>
            <hr />
            <form onSubmit={e => { handleSubmit(e) }} className='form-container'>
                <label htmlFor="email">Doctor Email: </label>
                <input type="email" value={email}  name='email' onChange={e =>{setEmail(e.target.value)}}/>
                <label htmlFor="phoneNumber">Contact Number: </label>
                <input type="text" value={phoneNumber}  name='phoneNumber' onChange={e =>{setPhoneNumber(e.target.value)}} />
                <label htmlFor="">Gender: </label>
                <select onChange={e => {setGender(e.target.value)}}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="userName">User Name: </label>
                <input type="userName" value={userName}  name='userName' onChange={e =>{setUserName(e.target.value)}}/>
                
                {/* <label htmlFor="">Country: </label>
                <select>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="">Educational Qualifications: </label>
                <input type="text" name="" id="" />
                <label htmlFor="">Address: </label> */}
                <Button type='submit' className='btn-bookAppointment btn-primary'>Add Doctor</Button>
            </form>
        </div>
    )
}

export default AdminAddNewDoctor