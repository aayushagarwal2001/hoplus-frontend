import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';

const AdminAddAppointment = () => {
    return (
        <div className='book-appointment'>
            <h1>Add Appointment</h1>
            <hr />
            <form action="" className='form-container'>
                <label htmlFor="">Doctor: </label>
                <select>
                    <option value="doctor 1">Doctor 1</option>
                    <option value="doctor 2">Doctor 2</option>
                    <option value="doctor 3">Doctor 3</option>
                </select>
                <label htmlFor="">Date: </label>
                <input type="date" name="" id="" />
                <label htmlFor="">Fees: </label>
                <input type="text" name="" id="" value="400" />
                <label htmlFor="">Contact No.: </label>
                <input type="number" name="" id="" />
                <label htmlFor="">Timeslot: </label>
                <input type="time" name="" id="" />
                <label htmlFor="">Address: </label>
                <textarea type="text" name="" id="" />
                <label htmlFor="">Description: </label>
                <textarea type="text" name="" id="" />
                <Button className='btn-bookAppointment btn-primary'>Add Appointment</Button>
            </form>
        </div>
    )
}

export default AdminAddAppointment