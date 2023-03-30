import React, { useEffect, useState ,Component} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookAppointment from './components/BookAppointment';
import ViewAppointment from './components/ViewAppointment';
import TestHistory from './components/TestHistory';
import PatientPrescription from './components/PatientPrescription';
import DoctorAppointment from './components/DoctorAppointment';
import Sidebar from './components/Sidebar';
import AdminAddAppointment from './components/AdminAddAppointment';
import AdminViewAppointment from './components/AdminViewAppointment';
import AdminAddTimeSlot from './components/AdminAddTimeSlot';
import AdminAddDoctorFees from './components/AdminAddDoctorFees';
import AdminAddNewDoctor from './components/AdminAddNewDoctor';
import BMICalculator from './components/BMICalculator';
import Patient from './components/Patient'
import optHealthCare from "./contracts/optimized_healthCare.json"
import docAddRecord from "./contracts/DoctorAddRecord.json"
import getWeb3 from "./getWeb3";
import DocLogin from "./components/DocLogin";
import Doctor from "./components/Doctor";
import NavbarComp from "./components/NavbarComp";
import Hospital from "./components/Hospital";
import Owner from "./components/Owner";
import "./App.css";
import "./components/css/antd.css"
import 'antd/dist/antd.css';

const App = () => {
  const [state,setState] = useState({  web3: null, accounts: null, contract: [],loggedAcc:null,loggedas:null});
  useEffect( () => async function(){
    try {
    
      var web3 = await getWeb3();
      var tmpcont=[];
      var accounts = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      var deployedNetwork = optHealthCare.networks[networkId];

      tmpcont['OPT'] = new web3.eth.Contract(
        optHealthCare.abi,
        deployedNetwork && deployedNetwork.address,
      );
      
      var deployedNetworks = docAddRecord.networks[networkId];

      tmpcont['DAR'] = new web3.eth.Contract(
        docAddRecord.abi,
        deployedNetworks && deployedNetworks.address,
      );


     //set State variables to derived values.
      setState({ web3, accounts, contract:tmpcont});

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
    }
  });
  const handleChange = (event) => {
    setState({newValue: event.target.value});
  }
  console.log(state.loggedas);   //uncomment to check if components are loaded
  console.log(state.accounts)
  if (!state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<BookAppointment />} />
          <Route path="/bmicalculator" exact element={<BMICalculator />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/viewappointment" element={<ViewAppointment />} />
          <Route path="/testhistory" element={<TestHistory />} />
          <Route path="/patientprescription" element={<PatientPrescription />} />
          <Route path="/doctorappointment" element={<DoctorAppointment />} />
          <Route path="/adminaddappointment" element={<AdminAddAppointment />} />
          <Route path="/adminviewappointment" element={<AdminViewAppointment />} />
          <Route path="/adminaddtimeslot" element={<AdminAddTimeSlot />} />
          <Route path="/adminadddoctorfees" element={<AdminAddDoctorFees />} />
          <Route path="/adminaddnewdoctor" element={<AdminAddNewDoctor />} />
          <Route path="/patientBlockChainAccess" element={<Patient contract={state.contract} Acc={state.accounts}/>}/>

        </Routes>
      </Sidebar>
    </Router>

    // <BMICalculator />
    // <BookAppointment />
    // <ProcessFaceRecognition />
    // <index />
    // <addFacePhoto />
  );
};

export default App;
