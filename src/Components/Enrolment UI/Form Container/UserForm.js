import React, { Component, useEffect } from 'react'
import ChildInfo from './ChildInfo';
import ParentInfo from './ParentInfo';
import HealthInfo from './HealthInfo';
import EmergencyInfo from './EmergencyInfo';
import TermsConditions from './TermsConditions';
import { ConfirmInfo } from './ConfirmInfo';

export class UserForm extends Component {

    state = {
        // form 1 (child)
        step: 1,
        firstName: '',
        lastName: '',
        dob: null,
        gender: '',
        schoolName: '',
        year: null,
        homeAdd: '',
        subUrb: '',
        postCode: null,
        studentEmail: '',

        // form 2 (parent)
        parentName1: '',
        relation1: '',
        parentEmail1: '',
        parentCont1: null,

        parentName2: '',
        relation2: '',
        parentEmail2: '',
        parentCont2: null,


        // form 3 (authorization)
        authPerson1: '',
        authCont1: null,
        authRelation1: '',

        authPerson2: '',
        authCont2: null,
        authRelation2: '',


        // form 4 (medical)
        foodAllergy: '',
        medication: '',
        medAllergy: '',
        healthProb: '',


        // form 5 (conditions)
        sign: ''
    }


    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous Step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle Fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    
    handleSelect = (ob,set) => {
        this.setState({
            [ob] : set
        })
    }

render() {
    const { step } = this.state;
    const { firstName, lastName, dob, gender, schoolName, year, homeAdd, subUrb, postCode, studentEmail,
        parentName1, relation1, parentEmail1, parentCont1, parentName2, relation2, parentEmail2, parentCont2,
        authPerson1, authCont1, authRelation1, authPerson2, authCont2, authRelation2,
        foodAllergy, medication, medAllergy, healthProb,
        sign

    } = this.state;

    const values = {
        firstName, lastName, dob, gender, schoolName, year, homeAdd, subUrb, postCode, studentEmail,
        parentName1, relation1, parentEmail1, parentCont1, parentName2, relation2, parentEmail2, parentCont2,
        authPerson1, authCont1, authRelation1, authPerson2, authCont2, authRelation2,
        foodAllergy, medication, medAllergy, healthProb,
        sign
    };

    switch (step) {
        case 1:
            return (
                <ChildInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <ParentInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <EmergencyInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 4:
            return (

                <HealthInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    handleSelect={this.handleSelect}
                />
            )
        case 5:
            return (
                <TermsConditions
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 6:
            return (
                <ConfirmInfo
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    values={values}
                />
            )
    }
}
}

export default UserForm