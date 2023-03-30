import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const PatientPrescription = () => {

    const data = [
        {
            appointmentId: 5,
            doctorName: "Atul Kumar",
            patientName: "Aman Gupta",
            prescriptionDate: "2022-02-01",
            prescription: "Sinarest, Cough Syrup",
            action: "view",
        },
        {
            appointmentId: 2,
            doctorName: "Kaushal Kishore",
            patientName: "Aman Gupta",
            prescriptionDate: "2022-02-22",
            prescription: "Combiflam",
            action: "view"
        },
        {
            appointmentId: 5,
            doctorName: "Amit Kumar",
            patientName: "Aman Gupta",
            prescriptionDate: "2022-03-03",
            prescription: "Sinarest",
            action: "view"
        },
        {
            appointmentId: 7,
            doctorName: "Amit Kumar",
            patientName: "Aman Gupta",
            prescriptionDate: "2022-10-23",
            prescription: "Sinarest, Meftal Spas",
            action: "view"
        },
        {
            appointmentId: 7,
            doctorName: "Amit Kumar",
            patientName: "Aman Gupta",
            prescriptionDate: "2022-12-19",
            prescription: "Azythromycin",
            action: "view"
        },
    ]

    const [modeldata, setModeldata] = useState({
        srNo: '',
        patientName: '',
        testName: '',
        date: '',
        deliveryDate: '',
        action: ''
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
            <div className="view-appointment">
                <h2>Patient Prescription Listing Page</h2>
                <hr />
                <div className='view-appointment-table'>
                    <table>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Doctor Name</th>
                            <th>Patient Name</th>
                            <th>Prescription Date</th>
                            <th>Action</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.appointmentId}</td>
                                    <td>{val.doctorName}</td>
                                    <td>{val.patientName}</td>
                                    <td>{val.prescriptionDate}</td>
                                    <td><button className='btn-viewAppointment' onClick={() => { handleShow(val) }}>{val.action}</button></td>
                                </tr>
                            )
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
                    <Modal.Title>Patient Prescription</Modal.Title>
                </Modal.Header>
                <Modal.Body>Appointment ID: {modeldata.appointmentId} </Modal.Body>
                <Modal.Body>Doctor Name: {modeldata.doctorName} </Modal.Body>
                <Modal.Body>Patient Name: {modeldata.patientName} </Modal.Body>
                <Modal.Body>Prescription Date: {modeldata.prescriptionDate} </Modal.Body>
                <Modal.Body>Prescription: {modeldata.prescription} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PatientPrescription