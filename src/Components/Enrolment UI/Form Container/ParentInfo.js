import { TextField, Button } from '@mui/material'
import React, { Component } from 'react'
import '../_enrol.scss'

export class ParentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                PName1: true,
                R1: true,
                PMail1: true,
                PNo1: true,
                PMail2: true,
                PNo2: true
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
        const { values: { parentName1, relation1, parentEmail1, parentCont1, parentName2, relation2, parentEmail2, parentCont2 },
            values, handleChange } = this.props;

        const { formErrors, formIsValid } = this.state;

        const handleValidate = () => {
            let formErrors = {};
            let formIsValid = true;

            // console.log(formIsValid);

            if (formIsValid) {
                // NAME 1
                if (!parentName1) {
                    formIsValid = false;
                    formErrors.PName1 = false;
                    // formErrors['FirstNameErr'] = "First Name is required";

                } else {
                    formErrors.PName1 = true;
                }

                // RELATION 1
                if (!relation1) {
                    formIsValid = false;
                    formErrors.R1 = false;
                    // formErrors['GenderErr'] = "Gender is required";
                } else { formErrors.R1 = true; }


                // EMAIL 1
                if(!parentEmail1){
                    formIsValid = false;
                    formErrors.PMail1 = false;
                } else {
                    var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if(!mailPattern.test(parentEmail1)) {
                        formIsValid = false;
                        formErrors.PMail1 = false;
                    } else {
                        formErrors.PMail1 = true;
                    }
                }

                // MOBIL 1
                if(!parentCont1){
                    formIsValid = false;
                    formErrors.PNo1 = false;
                } else {
                    var mobPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                    if (!mobPattern.test(parentCont1)){
                        formIsValid = false;
                        formErrors.PNo1 = false;
                    } else {
                        formErrors.PNo1 = true;
                    }
                }

                // Mail 2
                if(parentEmail2 == ""){
                    // formIsValid = false;
                    formErrors.PMail2 = true;
                    
                } else {
                    var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if(!mailPattern.test(parentEmail2)) {  //false
                        formIsValid = false;
                        formErrors.PMail2 = false;
                    } else {
                        formErrors.PMail2 = true;
                    }
                }
                

                // MOBIL 2
                if(parentCont2 == ""){
                    // formIsValid = false;
                    formErrors.PNo2 = true;
                } else {
                    var mobPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                    if (!mobPattern.test(parentCont2)){
                        formIsValid = false;
                        formErrors.PNo2 = false;
                    } else {
                        formErrors.PNo2 = true;
                    }
                }

            }

            this.setState({ formErrors: formErrors, formIsValid: formIsValid })
            if (!formIsValid) {
                this.props.nextStep()
            }
            return formIsValid;
        }

        return (
            <div className='parentInfo commanInfoStyle'>
                <p className='formSubtitle'> Parents/Guardian's Information </p>

                {/* Row 1 */}
                <h4> Detail 1 </h4>
                <div className="parent-name-relation child-wrapper">
                    <div className="parent-name child-n">
                        <TextField
                            label='Name'
                            fullWidth
                            variant='outlined'
                            required
                            defaultValue={values.parentName1}
                            onChange={handleChange('parentName1')}
                            error={!formErrors.PName1}
                            helperText={formErrors.PName1 ? "" : "Name is required"}
                        />
                    </div>
                    <div className="parent-relation child-n">
                        <TextField
                            label='Relation'
                            fullWidth
                            variant='outlined'
                            required
                            defaultValue={values.relation1}
                            onChange={handleChange('relation1')}
                            error={!formErrors.R1}
                            helperText={formErrors.R1 ? "" : "Relationship must be mentioned"}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="parent-email-contact child-wrapper">
                    <div className="parent-email child-n">
                        <TextField
                            label='Email'
                            fullWidth
                            variant='outlined'
                            required
                            defaultValue={values.parentEmail1}
                            onChange={handleChange('parentEmail1')}
                            error={!formErrors.PMail1}
                            helperText={formErrors.PMail1 ? "" : "Email is required"}
                        />
                    </div>
                    <div className="parent-relation child-n">
                        <TextField
                            label='Contact No.'
                            
                            fullWidth
                            variant='outlined'
                            required
                            defaultValue={values.parentCont1}
                            onChange={handleChange('parentCont1')}
                            error={!formErrors.PNo1}
                            helperText={formErrors.PNo1 ? "" : "Enter a valid phone number"}

                        />
                    </div>
                </div>

                {/* Row 3 */}
                <h5> Detail 2 </h5>
                <div className="parent-name-relation child-wrapper">
                    <div className="parent-name child-n">
                        <TextField
                            label='Name'
                            fullWidth
                            variant='outlined'
                            defaultValue={values.parentName2}
                            onChange={handleChange('parentName2')}

                        />
                    </div>
                    <div className="parent-relation child-n">
                        <TextField
                            label='Relation'
                            fullWidth
                            variant='outlined'
                            defaultValue={values.relation2}
                            onChange={handleChange('relation2')}

                        />
                    </div>

                </div>

                {/* Row 4 */}
                <div className="parent-email-contact child-wrapper">
                    <div className="parent-email child-n">
                        <TextField
                            label='Email'
                            fullWidth
                            variant='outlined'
                            defaultValue={values.parentEmail2}
                            onChange={handleChange('parentEmail2')}
                            error={!formErrors.PMail2}
                            helperText={formErrors.PMail2 ? "" : "Email is required"}
                        />
                    </div>
                    <div className="parent-relation child-n">
                        <TextField
                            label='Contact No.'
                            fullWidth
                            variant='outlined'
                            defaultValue={values.parentCont2}
                            onChange={handleChange('parentCont2')}
                            error={!formErrors.PNo2}
                            helperText={formErrors.PNo2 ? "" : "Enter a valid phone number"}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="button-wrapper child-wrapper">
                    <div className="btn2-prev child-n">
                        <Button
                            label='Back'
                            variant='outlined'
                            style={{ color: 'blue' }}
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

export default ParentInfo