import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';

const AdminAddDoctorFees = () => {
    return (
        <div className='book-appointment'>
            <h1>Add Doctor Fees</h1>
            <hr />
            <form action="" className='form-container'>
                <label htmlFor="">Doctor: </label>
                <select>
                    <option value="doctor 1">Doctor 1</option>
                    <option value="doctor 2">Doctor 2</option>
                    <option value="doctor 3">Doctor 3</option>
                </select>
                <label htmlFor="">Amount: </label>
                <input type="number" name="" id="" />
                <label htmlFor="">Description: </label>
                <textarea type="text" name="" id="" />
                <Button className='btn-bookAppointment btn-primary'>Submit</Button>
            </form>
        </div>
    )
}

export default AdminAddDoctorFees