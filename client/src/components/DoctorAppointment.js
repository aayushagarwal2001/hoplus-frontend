import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const DoctorAppointment = () => {

    const data = [
        {
            srNo: 1,
            patientName: "Aman Gupta",
            doctorName: "Atul Kumar",
            dateTime: "28th December 2022",
            patientContact: "9823845687",
            fees: "400",
            action: "view",
        },
        {
            srNo: 2,
            patientName: "Sunil Singh",
            doctorName: "Atul Kumar",
            dateTime: "29th December 2022",
            patientContact: "9414598796",
            fees: "400",
            action: "view"
        },
        {
            srNo: 3,
            patientName: "Jay Kumar",
            doctorName: "Atul Kumar",
            dateTime: "29th December 2022",
            patientContact: "8233758567",
            fees: "400",
            action: "view"
        },
        {
            srNo: 4,
            patientName: "Amit Chahuhan",
            doctorName: "Atul Kumar",
            dateTime: "29th December 2022",
            patientContact: "7850085632",
            fees: "400",
            action: "view"
        },
        {
            srNo: 5,
            patientName: "Aman Gupta",
            doctorName: "Atul Kumar",
            dateTime: "30th December 2022",
            patientContact: "9823845687",
            fees: "400",
            action: "view"
        },
        {
            srNo: 6,
            patientName: "Aman Gupta",
            doctorName: "Atul Kumar",
            dateTime: "31st December 2022",
            patientContact: "9823845687",
            fees: "400",
            action: "view"
        },
    ]

    const [modeldata, setModeldata] = useState({
        srNo: '',
        patientName: "",
        doctorName: "",
        dateTime: "",
        patientContact: "",
        fees: "",
        action: ""
    })

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setModeldata(val)
        // alert(setModeldata)
    }

    return (
        <>
            <div className="view-appointment" >
                <h2>My Appointments</h2>
                <hr />
                <div className='view-appointment-table'>
                    <table>
                        <tr>
                            <th>Sr No.</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Date Time</th>
                            <th>Patient Contact</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.srNo}</td>
                                    <td>{val.patientName}</td>
                                    <td>{val.doctorName}</td>
                                    <td>{val.dateTime}</td>
                                    <td>{val.patientContact}</td>
                                    <td>{val.fees}</td>
                                    <td><button className='btn-viewAppointment' onClick={() => { handleShow(val) }}>{val.action}</button></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div >

            <div
            // className="d-flex align-items-center justify-content-center"
            // style={{ height: "100vh" }}
            >
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Patient Test Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sr No.: {modeldata.srNo} </Modal.Body>
                <Modal.Body>Patient Name: {modeldata.patientName} </Modal.Body>
                <Modal.Body>Doctor Name: {modeldata.doctorName} </Modal.Body>
                <Modal.Body>Date: {modeldata.dateTime} </Modal.Body>
                <Modal.Body>Patient Contact: {modeldata.patientContact} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DoctorAppointment