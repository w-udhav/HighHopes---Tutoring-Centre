import { TextField, Button } from '@mui/material'
import React, { Component } from 'react'
import '../_enrol.scss'

export class EmergencyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                APerson1: true,
                ANo1: true,
                AR1: true,
                ANo2: true,
            },
            formIsValid: true
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

    render() {
        const { values: { authPerson1, authCont1, authRelation1, authCont2 },
            values, handleChange } = this.props;

        const { formErrors, formIsValid } = this.state;

        const handleValidate = () => {
            let formErrors = {};
            let formIsValid = true;

            // console.log(formIsValid);

            if (formIsValid) {
                // NAME 1
                if (!authPerson1) {
                    formIsValid = false;
                    formErrors.APerson1 = false;
                    // formErrors['FirstNameErr'] = "First Name is required";

                } else {
                    formErrors.APerson1 = true;
                }

                // RELATION 1
                if (!authRelation1) {
                    formIsValid = false;
                    formErrors.AR1 = false;
                    // formErrors['GenderErr'] = "Gender is required";
                } else { formErrors.AR1 = true; }


                // MOBIL 1
                if (!authCont1) {
                    formIsValid = false;
                    formErrors.ANo1 = false;
                } else {
                    var mobPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                    if (!mobPattern.test(authCont1)) {
                        formIsValid = false;
                        formErrors.PNo1 = false;
                    } else {
                        formErrors.PNo1 = true;
                    }
                }

                // Mail 2


                // MOBIL 2
                // if (authCont2 == "") {
                //     // formIsValid = false;
                //     formErrors.ANo2 = true;
                // } else {
                //     var mobPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                //     if (!mobPattern.test(authCont2)) {
                //         formIsValid = false;
                //         formErrors.ANo2 = false;
                //     } else {
                //         formErrors.ANo2 = true;
                //     }
                // }

            }

            this.setState({ formErrors: formErrors, formIsValid: formIsValid })
            if (formIsValid) {
                this.props.nextStep()
            }
            return formIsValid;
        }

        return (
            <div className='commanInfoStyle'>
                <p className='formSubtitle'> Emergency Contact <span> (other than parent's or guardian's) </span> </p>
                <p> If the child's parents/guardian can not be contacted, the following nominated authorized person will be contacted </p>

                <h4> (1) Authorized Contact Person </h4>

                <div className="Auth-wrapper child-wrapper">
                    <div className="child-n">
                        <TextField
                            label='Person Name'
                            fullWidth
                            required
                            defaultValue={values.authPerson1}
                            onChange={handleChange('authPerson1')}
                            error={!formErrors.APerson1}
                            helperText={formErrors.APerson1 ? "" : "Name is required"}
                        />
                    </div>
                    <div className="child-n">
                        <TextField
                            label='Contact Number'
                            fullWidth
                            required
                            defaultValue={values.authCont1}
                            onChange={handleChange('authCont1')}
                            error={!formErrors.ANo1}
                            helperText={formErrors.ANo1 ? "" : "Enter a valid phone number"}
                        />
                    </div>
                </div>
                <div className="child-wrapper">
                    <div className="child-n">
                        <TextField
                            label='Relationship'
                            fullWidth
                            required
                            defaultValue={values.authRelation1}
                            onChange={handleChange('authRelation1')}
                            error={!formErrors.AR1}
                            helperText={formErrors.AR1 ? "" : "Relationship must be mentioned"}
                        />
                    </div>
                </div>

                <h4> (2) Authorized Contact Person </h4>

                <div className="Auth-wrapper child-wrapper">
                    <div className="child-n">
                        <TextField
                            label='Person Name'
                            fullWidth
                            defaultValue={values.authPerson2}
                            onChange={handleChange('authPerson2')}
                        />
                    </div>
                    <div className="child-n">
                        <TextField
                            label='Contact Number'
                            type='number'
                            fullWidth
                            defaultValue={values.authCont2}
                            onChange={handleChange('authCont2')}
                            error={!formErrors.ANo2}
                            helperText={formErrors.ANo2 ? "" : "Enter a valid phone number"}
                        />
                    </div>
                </div>
                <div className="child-wrapper">
                    <div className="child-n">
                        <TextField
                            label='Relationship'
                            fullWidth
                            defaultValue={values.authRelation2}
                            onChange={handleChange('authRelation2')}
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
                            variant='contained'
                            onClick={handleValidate}
                        > Continue </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmergencyInfo