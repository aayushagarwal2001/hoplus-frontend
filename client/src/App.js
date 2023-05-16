import React, { useEffect, useState ,Component, createElement} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes ,NavLink,useNavigate, json} from 'react-router-dom';
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
import Hospital from "./components/Hospital";
import Owner from "./components/Owner";
import SignUpForm from "./components/SignUpForm"
import SignInForm from './components/SignInForm';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Widget from 'rasa-webchat';
import Home from './components/Home';
import "./App.css";
import "./components/css/antd.css"
import 'antd/dist/antd.css';

const App = () => {
  const [state,setState] = useState({  web3: null, accounts: null, contract: [],loggedAcc:null,loggedas:null});
  const [currentUser,setCurrentUser] = useState({user : null,token: null })
  const navigate = useNavigate();
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
      // document.head.removeChild(document.head.firstChild)
    
      localStorage.removeItem("chat_session")
      
      // k.replace()
      let token = localStorage.getItem("auth-token");
      if(token === null){
      localStorage.setItem("auth-token", "");
      token = "";
      }
      let userRes;
      const tokenResponse = await axios.post('http://localhost:4040/api/users/tokenIsValid',null,{headers: { Authorization: `Bearer ${token}`}});
      if (tokenResponse.data) {
      userRes = await axios.get("http://localhost:4040/api/users/userInfo", {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(userRes)
      setCurrentUser({
      user: userRes.data,
      token: token
      });
      
      }
      if(userRes.data.role == 'patient'){
      // let widget = document.createElement("div");
      // widget.setAttribute("data-websocket-url","http://localhost:5050");
      // widget.setAttribute("data-token",token);
      // let authToken = "/set_data{\"token\":"+"\"Bearer "+token+"\"}";
      // console.log(authToken);
      // widget.setAttribute("data-initial-payload",authToken);
      // widget.id = "rasa-chat-widget" 
      // let s = document.createElement("script");
      // s.setAttribute("src","https://unpkg.com/@rasahq/rasa-chat");
      // s.setAttribute("type","application/javascript");
      // document.body.appendChild(widget);
      // document.body.appendChild(s);
      let e = document.createElement("script"),
      t = document.head || document.getElementsByTagName("head")[0];
      e.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"
      e.async = false
      e.id = "pop"
      e.onload = () => {
            window.WebChat.default(
              {
                customData: { language: "en" },
                socketUrl: "http://localhost:5050",
                initPayload	: '/set_data{"token":'+'"Bearer '+token+'"}',
                storage: 'session'

                // add other props here
              },
              null
            );
          }
      t.insertBefore(e,t.firstChild)   
    // (e.src =
    //   "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
    //   // Replace 1.x.x with the version that you want
    //   (e.async = !0),
    //   (e.onload = () => {
    //     window.WebChat.default(
    //       {
    //         customData: { language: "en" },
    //         socketUrl: "https://bf-botfront.development.agents.botfront.cloud",
    //         // add other props here
    //       },
    //       null
    //     );
    //   }),
    //   t.insertBefore(e, t.firstChild);

      }
//       <div id="rasa-chat-widget" data-websocket-url="http://localhost:5050" data-default-open	
// ="true"  ></div>
//   <script src="https://unpkg.com/@rasahq/rasa-chat" type="application/javascript"></script>
     
    
      
  },[]);
  const handleChange = (data) => {
    setCurrentUser({user: data.user,token: data.token});
    // if( data.user && data.user.role == "patient")
    //   {
    // let elem = document.getElementById("rasaWebchatPro");
    // elem.style.display = 'block'
   
    //   }
    navigate('/')

  }

  const onlogOut = function(){
    localStorage.setItem("auth-token", null);
    console.log(currentUser)
    // if(currentUser.user.role == "patient"){ let elem = document.getElementById("rasaWebchatPro");
    // elem.style.display = 'none'}
    setCurrentUser({user: null,token: null});
    navigate('/')
  }
  console.log(state.loggedas);   //uncomment to check if components are loaded
  console.log(state.accounts)
  if (!state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  if(!currentUser.user &&state.web3)
  { 
    return (
      
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                className={(navData) => (navData.isActive ? "pageSwitcherItem-active" : "pageSwitcherItem")}
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                className={(navData) => (navData.isActive ? "pageSwitcherItem-active" : "pageSwitcherItem")}
        
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                className={(navData) => (navData.isActive ? "formTitleLink-active" : "formTitleLink")}
                
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                className={(navData) => (navData.isActive ? "formTitleLink-active" : "formTitleLink")}
              >
                Sign Up
              </NavLink>
            </div>
            <Routes>
            <Route exact path="/" element={<SignUpForm user={currentUser.user} onUserSubmit= {handleChange}/> } />
            <Route path="/sign-in" element={<SignInForm user={currentUser.user} onUserSubmit= {handleChange}/>}/>
            </Routes>
          </div>
        </div>
    
    );
  }
  if(currentUser.user.role != null){
  return (
      <>
      
      <Navbar  variant="dark"  style={{paddingLeft:"1vw",backgroundColor:"rgb(41 75 107)"}}>
        
          <Navbar.Brand href="#home">Sanatorium</Navbar.Brand>
          <Nav className="justify-content-end">
          <Button variant="danger" onClick={onlogOut}>Logout</Button>{' '}
          </Nav>
      </Navbar>
      
      
      
      <Sidebar user={currentUser.user}>
        <Routes>
         
          <Route path="/bmicalculator" exact element={<BMICalculator />} />
          <Route path="/"  element = {<Home user = {currentUser.user}/>}/>
          <Route path="/testhistory" element={<TestHistory />} />
          <Route path="/patientprescription" element={<PatientPrescription />} />
          <Route path="/doctorappointment" element={<DoctorAppointment />} />
          <Route path="/adminaddappointment" element={<AdminAddAppointment />} />
          <Route path="/viewappointment" element={<AdminViewAppointment  user={currentUser}/>} />
          <Route path="/adminaddtimeslot" element={<AdminAddTimeSlot />} />
          <Route path="/adminadddoctorfees" element={<AdminAddDoctorFees />} />
          <Route path="/adminaddnewdoctor" element={<AdminAddNewDoctor />} />
          <Route path="/patientBlockChainAccess" element={<Patient contract={state.contract} Acc={state.accounts}/>}/>
          <Route path="/adminBlockChainAccess"   element={<Owner contract={state.contract} Acc={state.accounts}/>}/>
          <Route path="/adminClinicBlockChainAccess"   element={<Hospital contract={state.contract} Acc={state.accounts}/>}/>
          <Route path="/doctorBlockChainAccess"   element={<Doctor contract={state.contract} Acc={state.accounts}/>}/>

        </Routes>
      </Sidebar>
    </>
    // <BMICalculator />
    // <BookAppointment />
    // <ProcessFaceRecognition />
    // <index />
    // <addFacePhoto />
  );}
  
};

export default App;
