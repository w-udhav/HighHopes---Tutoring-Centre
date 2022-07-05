import { Button } from '@mui/material';
import React, { Component } from 'react'
import '../_enrol.scss'
// import firebase from '../../../Firebase'
import './_confirm.scss'
import { db } from '../../../Firebase'
import { collection, addDoc, doc } from 'firebase/firestore'
import { getDatabase, set, ref } from 'firebase/database'
import { Link } from 'react-router-dom';
// import * as firebase from 'firebase/app';


export class ConfirmInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mailStatus: false,
            buttonVis: true
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values: { firstName, lastName, dob, gender, schoolName, year, homeAdd, subUrb, postCode, studentEmail,
            parentName1, relation1, parentEmail1, parentCont1, parentName2, relation2, parentEmail2, parentCont2,
            authPerson1, authCont1, authRelation1, authPerson2, authCont2, authRelation2,
            foodAllergy, medication, medAllergy, healthProb,
            sign } } = this.props;

        // const ref = firebase.firestore().collection("studentForm")
        console.log(firstName);
        const { loading, mailStatus, buttonVis } = this.state;

        

        const handleSubmit = async (e) => {
            e.preventDefault();
            this.setState({ loading: true, mailStatus: false })
            try {

                await addDoc(collection(db, 'studentForm'), {
                    Name: firstName + lastName,
                    DoB: dob,
                    Gender: gender,
                    SchoolName: schoolName,
                    Year: year,
                    HomeAddress: homeAdd,
                    Suburb: subUrb,
                    PostCode: postCode,
                    StudentEmail: studentEmail,
                    ParentName1: parentName1,
                    Relation1: relation1,
                    ParentEmail1: parentEmail1,
                    ParentCont1: parentCont1,
                    ParentName2: parentName2,
                    Relation2: relation2,
                    ParentEmail2: parentEmail2,
                    ParentCont2: parentCont2,
                    authPerson1: authPerson1,
                    authCont1: authCont1,
                    authRelation1: authRelation1,
                    authPerson2: authPerson2,
                    authCont2: authCont2,
                    authRelation2: authRelation2,
                    foodAllergy: foodAllergy,
                    medication: medication,
                    medAllergy: medAllergy,
                    healthProb: healthProb,
                    Signaturee: sign
                })
                console.log("Data sent!")
            } catch (err) {
                console.log(err);
            }
            this.setState({ loading: false, mailStatus: true, buttonVis: false })

        }

        return (
            <div className='commanInfoStyle'>



                {
                    loading &&
                    <div>
                        <p className='formSubtitle'> Confirm your Details </p>
                        <fieldset className='fields'>
                            <legend> Child Information </legend>
                            <div className="child-wrapper fieldContent">
                                <div className="child-n f1">
                                    <p> Name : {firstName + " " + lastName} </p>
                                </div>
                                <div className="child-n f1">
                                    <p> Date of Birth : {dob} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Gender : {gender} </p>
                                </div>
                                <div className="child-n">
                                    <p> School Name : {schoolName} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Year : {year} </p>
                                </div>
                                <div className="child-n">
                                    <p> Home Address : {homeAdd} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Suburb : {subUrb} </p>
                                </div>
                                <div className="child-n">
                                    <p> Postcode : {postCode} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Email : {studentEmail} </p>
                                </div>
                                <div className="child-n">

                                </div>
                            </div>
                        </fieldset>

                        <fieldset className='fields'>
                            <legend> Parent's Information </legend>
                            <h4> Detail 1 </h4>
                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Name : {parentName1} </p>
                                </div>
                                <div className="child-n">
                                    <p> Relation : {relation1} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Email : {parentEmail1} </p>
                                </div>
                                <div className="child-n">
                                    <p> Contact : {parentCont1} </p>
                                </div>
                            </div>

                            <h4> Detail 2 </h4>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Name : {parentName2 == '' ? "N/A" : parentName2} </p>
                                </div>
                                <div className="child-n">
                                    <p> Relation : {relation2 == '' ? "N/A" : relation2} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Email : {parentEmail2 == '' ? "N/A" : parentEmail2} </p>
                                </div>
                                <div className="child-n">
                                    <p> Contact : {parentCont2 == '' ? "N/A" : parentCont2} </p>
                                </div>
                            </div>
                        </fieldset>

                        {/* Emergency Contact */}
                        <fieldset className='fields'>
                            <legend> Emergency Contact </legend>
                            <h4> Detail 1 </h4>
                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Name : {authPerson1} </p>
                                </div>
                                <div className="child-n">
                                    <p> Contact : {authCont1} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Relation : {authRelation1} </p>
                                </div>
                                <div className="child-n">

                                </div>
                            </div>

                            <h4> Detail 2 </h4>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Name : {authPerson2 == '' ? "N/A" : authPerson2} </p>
                                </div>
                                <div className="child-n">
                                    <p> Contact : {authCont2 == '' ? "N/A" : authCont2} </p>
                                </div>
                            </div>

                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Relation : {authRelation2 == '' ? "N/A" : authRelation2} </p>
                                </div>
                                <div className="child-n">

                                </div>
                            </div>
                        </fieldset>

                        {/* Health info */}
                        <fieldset className='fields'>
                            <legend> Health Information </legend>
                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Food Allergy : {foodAllergy} </p>
                                </div>
                                <div className="child-n">
                                    <p> On medication : {medication} </p>
                                </div>
                            </div>
                            <div className="child-wrapper fieldContent">
                                <div className="child-n">
                                    <p> Allergic to any medication : {medAllergy} </p>
                                </div>
                                <div className="child-n">
                                    <p> Any Health Problem : {healthProb} </p>
                                </div>
                            </div>
                        </fieldset>

                        {/* Terms */}
                        <fieldset className='fields'>
                            <legend> Terms and Conditions </legend>
                            <div className="child-wrapper fieldContent">
                                <div className="condition-Agree">
                                    <p> I, <span>{sign}</span>, agrees to all the conditions mentioned. </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                }

                {
                    mailStatus
                    &&
                    <div>
                        <div class="success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>
                        <div className="mailStatus">
                            <p className='formSubtitle'> Mail Sent </p>
                            <p> Thank you for your visit. We will respond to you soon.</p>
                            <p> If you faced any issue, please try again or try sending the mail manually </p>
                            <p> <a href='mailto:highhopestutoring.canningvale@gmail.com'> Click here </a> </p>
                        </div>
                    </div>
                }

                {
                    buttonVis ?

                        <div className="button-wrapper child-wrapper">
                            <div className="btn1-clear child-n">
                                <Button
                                    variant='outlined'
                                    onClick={this.back}
                                > Back </Button>
                            </div>
                            <div className="btn1-next child-n" style={{ textAlign: 'right', flex: 1 }}>
                                <Button
                                    label='Continue'
                                    variant='contained'
                                    color='success'
                                    onClick={handleSubmit}
                                > Send Mail </Button>
                            </div>
                        </div> :

                        <div className="button-wrapper child-wrapper">
                            <div className="btn1-next child-n" style={{ textAlign: 'right', flex: 1 }}>
                                <Button
                                    label='Continue'
                                    variant='contained'
                                    color='primary'
                                > <Link to='/'> Continue </Link> </Button>
                            </div>
                        </div>
                }
            </div>
        );
    }
}