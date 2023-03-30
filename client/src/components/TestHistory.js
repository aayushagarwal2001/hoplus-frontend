import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const TestHistory = () => {

    const data = [
        {
            srNo: 1,
            patientName: "Aman Gupta",
            testName: "Blood Clotting Tests",
            date: "2022-08-17",
            deliveryDate: "2022-08-19",
            action: "view",
        },
        {
            srNo: 2,
            patientName: "Aman Gupta",
            testName: "Complete Blood Count Test",
            date: "2022-08-19",
            deliveryDate: "2022-08-21",
            action: "view",
        },
        {
            srNo: 3,
            patientName: "Aman Gupta",
            testName: "Blood Tests for Heart",
            date: "2022-08-23",
            deliveryDate: "2022-08-26",
            action: "view",
        },
        {
            srNo: 4,
            patientName: "Aman Gupta",
            testName: "Hematocrit",
            date: "2022-09-15",
            deliveryDate: "2022-09-17",
            action: "view",
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
            <div className="test-history">
                <h2>Patient Test Report</h2>
                <hr />
                <div className='test-history-table'>
                    <table>
                        <tr>
                            <th>Sr No.</th>
                            <th>Patient Name</th>
                            <th>Test Name</th>
                            <th>Date</th>
                            <th>Delivery Date</th>
                            <th>Action</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.srNo}</td>
                                    <td>{val.patientName}</td>
                                    <td>{val.testName}</td>
                                    <td>{val.date}</td>
                                    <td>{val.deliveryDate}</td>
                                    <td><button className="btn-test-history" onClick={() => { handleShow(val) }}>{val.action}</button></td>
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
                    <Modal.Title>Patient Test Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sr No.: {modeldata.srNo} </Modal.Body>
                <Modal.Body>Patient Name: {modeldata.patientName} </Modal.Body>
                <Modal.Body>Test Name: {modeldata.testName} </Modal.Body>
                <Modal.Body>Date: {modeldata.date} </Modal.Body>
                <Modal.Body>Delivery Date: {modeldata.deliveryDate} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TestHistory