import React, { Component } from 'react'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import '../_enrol.scss'

export class TermsConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agree: false,
            formIsValid : true,
            formErrors : {
                Sign : true
            }
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleCheckBox = e => {
        let state = this.state;
        state.agree = e.target.checked;
        this.setState(state);
    }

    render() {
        const { values, handleChange } = this.props;
        const { values: { sign } } = this.props;
        const { agree, formErrors } = this.state;

        const handleValidate = () => {
            let formIsValid = true;
            let formErrors = {};

            if(formIsValid){
                if(!sign){
                    formIsValid = false;
                    formErrors.Sign = false;
                } else {
                    formErrors.Sign = true;
                }
            }

            this.setState({formErrors:formErrors, formIsValid: formIsValid});

            if(formIsValid){
                this.props.nextStep();
            }

            return formIsValid;
        }


        return (
            <div className='commanInfoStyle'>
                <p className='formSubtitle'> Terms and Conditions </p>
                <div className="child-wrapper">
                    <div className="terms">
                        <p> Conditions are as follows: </p>
                        <ul>
                            <li>
                                Tuition is provided on a term basis; students are enrolled for the term and fees are payable in advance for the term which they are enrolled.
                            </li>
                            <li>
                                There are no refunds or credits give for lessons missed by students
                            </li>
                            <li>
                                Your Tuition time remains same from term to term unless otherwise notified.
                            </li>
                            <li>
                                Once enrolled Four weeks' notice must be given if you wish to drop out of Tuition and then the balance of the term will be refunded.
                            </li>
                            <li>
                                Enrolments are taken throughout the terms.
                            </li>
                        </ul>
                        <br />
                        <p> If you are unable to attend a lesson </p>
                        <p>
                            Please let us know a day before your Tuition class, if you going to miss and we can organise the following:
                            An alternative class time can be arranged if there is space on another day.
                            Should there be another class during the week at a similar stage of the course, you may attend this class if numbers permit.

                            <ul>
                                <li>
                                    NO MORE THAN 2 OCCASIONS PER TERM AND CANNONT BE CARRIED FORWARD
                                </li>
                                <li>
                                    It is parent/student's responsibility to follow up and organise a makeup tuition class with the teacher.
                                </li>
                            </ul>

                            In the event that no suitable alternative time can be scheduled, then our no refund or no credits policy will apply for not taking Tuition classes during the term.
                        </p>
                        <br />

                        <p>
                            Direct Debit Customers
                        </p>
                        <p>
                            New Direct debit form must be filled in at the start of the term.
                            All term payments must be completed within 10 consecutive weeks from the commencement of the term or 5 fortnightly payments from the commencement of the term.
                            For students who join mid-term, full payment for the remaining of the term is to be made upon the enrolment.

                        </p>

                        <p>
                            Payment of Account/Securing your place for the next Term
                        </p>
                        <p>
                            Invoices for the next term will be printed and handed to all students or email to the parents on week 7 of our term (3 weeks before the school holidays).
                        </p>
                    </div>
                </div>

                <div className="child-wrapper">
                    <div className="child-n">
                        <FormControlLabel
                            className='agreeBox'
                            control={<Checkbox
                                size='small'
                                id='checker'
                                color='success'
                                onChange={this.handleCheckBox}
                                checked={this.state.agree}
                            />}
                            label='I agree'
                        />
                    </div>
                    <div className="child-n">
                        <TextField
                            label='Signature'
                            fullWidth
                            required
                            defaultValue={values.sign}
                            onChange={handleChange('sign')}
                            error={!formErrors.Sign}
                            helperText={formErrors.Sign ? "" : "Please enter your name here."}
                        />
                    </div>
                </div>
                <div className="button-wrapper child-wrapper">
                    <div className="btn3-prev child-n">
                        <Button
                            label='Back'
                            variant='outlined'
                            onClick={this.back}
                        > Back </Button>
                    </div>
                    <div className="btn2-next child-n">
                        <Button
                            label='Continue'
                            id='agreeCont'
                            variant='contained'
                            onClick={handleValidate}
                            disabled={!agree}
                        > Continue </Button>


                    </div>
                </div>
            </div>
        )
    }
}

export default TermsConditions