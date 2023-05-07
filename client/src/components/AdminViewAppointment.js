import React, { useEffect, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
const AdminViewAppointment = (props) => {
    const [data,setData]= useState({appointment:[]})
    useEffect(() => async function(){
            var apiData =  await axios.get('http://localhost:4040/api/apppointment/viewAppointment',{headers: { Authorization: `Bearer ${props.user.token}`}});
            setData({appointment : apiData.data})
    },[])
    
    // data = [
    //     {
    //         srNo: 1,
    //         patientName: "Aman Gupta",
    //         doctorName: "Atul Kumar",
    //         patientContact: "9823845687",
    //         fees: "400",
    //         action: "view",
    //     },
    //     {
    //         srNo: 2,
    //         patientName: "Sunil Singh",
    //         doctorName: "Atul Kumar",
    //         patientContact: "9636268699",
    //         fees: "400",
    //         action: "view",
    //     },
    //     {
    //         srNo: 3,
    //         patientName: "Jay Kumar",
    //         doctorName: "Atul Kumar",
    //         patientContact: "9829240677",
    //         fees: "400",
    //         action: "view",
    //     },
    //     {
    //         srNo: 4,
    //         patientName: "Aman Gupta",
    //         doctorName: "Kaushal Kishore",
    //         patientContact: "9823845687",
    //         fees: "400",
    //         action: "view"
    //     },
    //     // {
    //     //     srNo: 5,
    //     //     patientName: "Aman Gupta",
    //     //     doctorName: "Amit Kumar",
    //     //     patientContact: "9823845687",
    //     //     fees: "400",
    //     //     action: "view"
    //     // },
    //     // {
    //     //     srNo: 6,
    //     //     patientName: "Sunil Singh",
    //     //     doctorName: "Atul Kumar",
    //     //     patientContact: "9636268699",
    //     //     fees: "400",
    //     //     action: "view",
    //     // },
    //     // {
    //     //     srNo: 7,
    //     //     patientName: "Jay Kumar",
    //     //     doctorName: "Atul Kumar",
    //     //     patientContact: "9829240677",
    //     //     fees: "400",
    //     //     action: "view",
    //     // },
    //     // {
    //     //     srNo: 8,
    //     //     patientName: "Aman Gupta",
    //     //     doctorName: "Amit Kumar",
    //     //     patientContact: "9823845687",
    //     //     fees: "400",
    //     //     action: "view"
    //     // },
    //     // {
    //     //     srNo: 9,
    //     //     patientName: "Aman Gupta",
    //     //     doctorName: "Amit Kumar",
    //     //     patientContact: "9823845687",
    //     //     fees: "400",
    //     //     action: "view"
    //     // },
    //     // {
    //     //     srNo: 10,
    //     //     patientName: "Aman Gupta",
    //     //     doctorName: "Atul Kumar",
    //     //     patientContact: "9823845687",
    //     //     fees: "400",
    //     //     action: "view"
    //     // },
    //     // {
    //     //     srNo: 11,
    //     //     patientName: "Aman Gupta",
    //     //     doctorName: "Kaushal Kishore",
    //     //     patientContact: "9823845687",
    //     //     fees: "400",
    //     //     action: "view"
    //     // },
    // ]
    console.log(data)
    const [modeldata, setModeldata] = useState({
        srNo: '',
        patientName: '',
        doctorName: '',
        patientContact: '',
        fees: '',
        otp : '',
        action: ''
    })

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setModeldata({patientName : val.patientInfo.username,doctorName :val.doctorInfo.username,patientContact :val.patientInfo.mobileNumber,otp:val.appointmentOtp,action:val.action } )
        // alert(setModeldata)
    }

    return (
        <>
            <div className="view-appointment">
                <h2>Appointment Report</h2>
                <hr />
                <div className='view-appointment-table'>
                    <table>
                        <tr>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Patient Contact</th>
                            <th>Fees</th>
                            <th>Date Of Appointment</th>
                            <th>Action</th>
                        </tr>
                        {data.appointment.map((val, key) => {
                            if(val.doctorInfo != null){
                            return (
                                <tr key={key}>
                                    <td>{val.patientInfo.username}</td>
                                    <td>{val.doctorInfo.username}</td>
                                    <td>{val.patientInfo.mobileNumber}</td>
                                    <td>400</td>
                                    <td>{val.appointmentDate}</td>
                                    <td><button className='btn-viewAppointment' onClick={() => { handleShow(val) }}>view</button></td>
                                </tr>
                            )
                            }
                        })}
                    </table>
                </div>
            </div>

            <div
            // className="d-flex align-items-center justify-content-center"
            // style={{ height: "100vh" }}
            >
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sr No.: {modeldata.srNo} </Modal.Body>
                <Modal.Body>Patient Name: {modeldata.patientName} </Modal.Body>
                <Modal.Body>Doctor Name: {modeldata.doctorName} </Modal.Body>
                <Modal.Body>Patient Contact: {modeldata.patientContact} </Modal.Body>
                <Modal.Body>Fees: {modeldata.fees} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminViewAppointment