import React, { useEffect, useState } from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const AdminAddTimeSlot = () => {
    const [startTime,setStartTime] = useState('00:00');
    const [endTime,setEndTime]  = useState('00:00');
    const [data,setData]= useState([])
    const handleSubmit = async (e)=>
    {     e.preventDefault()
        console.log(startTime)
        console.log(endTime)
        var token = localStorage.getItem("auth-token");
        const loginResponse = await axios.post("http://localhost:4040/api/doctor/timeSlot",{startTime : startTime,endTime : endTime},{headers: { Authorization: `Bearer ${token}`}});
        console.log(loginResponse)  
       
       
    }
    useEffect(() => async function(){
        var token = localStorage.getItem("auth-token");
        var apiData =  await axios.get('http://localhost:4040/api/doctor/showTimeSlots',{headers: { Authorization: `Bearer ${token}`}});
        setData(apiData.data)
},[])
    // const data = [
    //     {
    //                 srNo: 1,
    //                 patientName: "9:00 am",
    //                 doctorName: "9:30 am",
    //                 patientContact: "9823845687",
    //                 fees: "400",
    //                 action: "view",
    //             },
    //             {
    //                 srNo: 2,
    //                 patientName: "9:45 am",
    //                 doctorName: "10:15 am",
    //                 patientContact: "9636268699",
    //                 fees: "400",
    //                 action: "view",
    //             },
    //             {
    //                 srNo: 3,
    //                 patientName: "10:25 am",
    //                 doctorName: "10:55 am",
    //                 patientContact: "9829240677",
    //                 fees: "400",
    //                 action: "view",
    //             },
    //             {
    //                 srNo: 4,
    //                 patientName: "11:00 am",
    //                 doctorName: "11:30 am",
    //                 patientContact: "9823845687",
    //                 fees: "400",
    //                 action: "view"
    //             },
    // ]
    return (
        <div className='row'>
         <div className='col-7'>   
        <div className='book-appointment'>
            <h1>Add Timeslot</h1>
            <hr />
            <form onSubmit={e => { handleSubmit(e) }} className='form-container'>
                <label htmlFor="">Timeslot: </label>
                From
                <input type="time" name="startTime" value = {startTime} onChange={e => {setStartTime(e.target.value)}} />
                To
                <input type="time" name="endTime" value = {endTime} onChange={e => {setEndTime(e.target.value)}} />
                <label htmlFor="">Description: </label>
                <textarea type="text" name="" id="" />
                <Button type = "submit" className='btn-bookAppointment btn-primary'>Add Timeslot</Button>
            </form>
        </div>
        </div>
        <div className='col-5 book-appointment' >
        <h1>Timeslots</h1>
            <hr />
            <div >
                    <table style={{width:"auto",height:"auto"}}>
                        <tr>
                            <th style={{padding : "0 15px"}}>Sr No.</th>
                            <th style={{padding : "0 15px"}}>Start Time</th>
                            <th style={{padding : "0 15px"}}>End Time</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td style={{padding : "0 15px"}}>{val.srNo}</td>
                                    <td style={{padding : "0 15px"}}>{val.startTime}</td>
                                    <td style={{padding : "0 15px"}}>{val.endTime}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
        </div>
        </div>
    )
}

export default AdminAddTimeSlot