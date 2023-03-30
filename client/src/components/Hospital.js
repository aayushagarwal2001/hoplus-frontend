import React, { Component } from 'react';
import { Card } from 'antd';
import {Button} from 'react-bootstrap';

// import healthRecord from "../contracts/DoctorAddRecord.json"
// import getWeb3 from '../getWeb3';

class Hospital extends Component{
    constructor(props){
        super(props);
        this.grantAccess = this.grantAccess.bind(this);
        this.registerDoc = this.registerDoc.bind(this);

    }

    contract =this.props.contract['OPT'];
    doctorAddRecord = this.props.contract['DAR'];
    accounts =this.props.Acc;

    state = {
        hosp_name:"",
        hosp_location:"",
        hosp_id:""
    }
    //async methods and states here
    async loadHospital(){
        try{
        let res = await this.contract.methods.getHospitalInfo().call({from:this.accounts[0]});
        this.setState({hosp_id:res[0],hosp_name:res[1],hosp_location:res[2]});
        }
        catch(e){
            console.log(e);
        }
    }


    async grantAccess(event){
        event.preventDefault();
        let requestor = document.getElementById('access_requestor').value;
        let patient = document.getElementById('access_of').value;
        console.log(requestor);
        console.log(patient);
        try{
            let result = await this.contract.methods.hospitalGrantAccess(requestor,patient).send({"from":this.accounts[0]});
            console.log(result);
        }
        catch(e){
            console.log(e)
        }
    }

    componentDidMount(){
        this.loadHospital();
    }

    async registerDoc(event) {
        event.preventDefault(true);
        let name = document.getElementById('doc_name').value;
        let id = document.getElementById('doc_id').value;
        let contact_info = document.getElementById('doc_contact').value;
        let specialization = document.getElementById('doc_specs').value;
    
        console.log(name);
        console.log(id);
        console.log(contact_info);
        console.log(specialization);
    
        await this.contract.methods.signupDoctor(id, name, contact_info, specialization).send({ from: this.accounts[0] });
    
      }
    render(){
        let {hosp_name, hosp_id, hosp_location} = this.state;
 
        return(
            <div className='container'> 
                <Card>
                    <div >
                        <span><b>Id: </b>{hosp_id}</span> <br></br>
                        <span><b>Name:</b> {hosp_name}</span> <br></br>
                        <span><b>Location: </b>{hosp_location}</span>
                    </div>
                </Card>
            

                <div className='row mt-3' style={{border:'1px black solid'}}>
                    <div className='col'>
                        <h5 style={{ align: 'centre' }}>Add Doctor To Blockchain</h5>

                        <div style={{ marginLeft: '20px' }}>
                        <form onSubmit={this.registerDoc}>
                            <div className="label mt-2"><b>Name:</b></div>
                            <input type="text" name="name" id="doc_name" placeholder="Name"></input>


                            <br></br>
                            <div className="label mt-2"><b>Blockchain Address:</b></div>
                            <input type="text" name="name" id="doc_id" placeholder="Address"></input>


                            <br></br>
                            <div className="label mt-2"><b>Contact Info:</b></div>
                            <input type="text" name="name" id="doc_contact" placeholder="Contact Info"></input>


                            <br></br>

                            <div className="label mt-2"><b>Specialization:</b></div>
                            <input type="text" name="name" id="doc_specs" placeholder="Specialization"></input>

                            <br></br>
                            <Button variant="dark" className="button" type="submit">Register Doctor</Button>
                        </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Hospital;