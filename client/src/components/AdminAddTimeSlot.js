import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';

const AdminAddTimeSlot = () => {
    return (
        <div className='book-appointment'>
            <h1>Add Timeslot</h1>
            <hr />
            <form action="" className='form-container'>
                <label htmlFor="">Timeslot: </label>
                From
                <input type="time" name="" id="" />
                To
                <input type="time" name="" id="" />
                <label htmlFor="">Description: </label>
                <textarea type="text" name="" id="" />
                <Button className='btn-bookAppointment btn-primary'>Add Timeslot</Button>
            </form>
        </div>
    )
}

export default AdminAddTimeSlot