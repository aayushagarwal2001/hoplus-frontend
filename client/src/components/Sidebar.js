import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        // {
        //     path: "/bmicalculator",
        //     name: "BMI Calculator",
        //     icon: <FaTh />
        // },

        // {
        //     path: "/bookappointment",
        //     name: "Book Appointment",
        //     icon: <FaTh />
        // },
        // {
        //     path: "/viewappointment",
        //     name: "View Appointment",
        //     icon: <FaShoppingBag />
        // },
        // {
        //     path: "/patientprescription",
        //     name: "Patient Prescription",
        //     icon: <FaRegChartBar />
        // },
        // {
        //     path: "/testhistory",
        //     name: "Test History",
        //     icon: <FaCommentAlt />
        // },
        // {
        //     path: "/doctorappointment",
        //     name: "Doctor Appointment",
        //     icon: <FaCommentAlt />
        // },
        {
            path: "/patientBlockChainAccess",
            name: "Electronic Health Records",
            icon: <FaCommentAlt />
        },

        {
            path: "/adminaddappointment",
            name: "Admin Add Appointment",
            icon: <FaCommentAlt />
        },
        {
            path: "/adminviewappointment",
            name: "Admin View Appointment",
            icon: <FaCommentAlt />
        },
        {
            path: "/adminaddtimeslot",
            name: "Admin Add Timeslot",
            icon: <FaCommentAlt />
        },
        {
            path: "/adminadddoctorfees",
            name: "Admin Add Doctor Fees",
            icon: <FaCommentAlt />
        },
        {
            path: "/adminaddnewdoctor",
            name: "Admin Add New Doctor ",
            icon: <FaCommentAlt />
        },
    ]
    return (
        <div className="container-fluid" style={{margin:'0px',display:'flex',padding:'0px',height: 'auto', minHeight:'100vh'}}>
            <div style={{ width: isOpen ? "200px" : "50px",height : 'inherit' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">HopPlus</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;