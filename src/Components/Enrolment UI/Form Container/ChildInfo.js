import React, { Component } from 'react'
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField, FormControl, Button } from '@mui/material';
import '../_enrol.scss'


export class ChildInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                StudentName: true,
                Gender: true,
                SchoolName: true,
                Year: true,
                HomeAddress: true,
                Suburb: true,
                PostCode: true,
                StuMail: true
            },
            formIsValid: true
        };
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }


    render() {
        const { values: { firstName, dob, gender, schoolName, year, homeAdd, subUrb, postCode, studentEmail },
            handleChange, values } = this.props;

        const { formErrors, formIsValid } = this.state;

        const handleValidate = () => {
            let formErrors = {};
            let formIsValid = true;

            // console.log(formIsValid);

            if (formIsValid) {
                //FirtName
                if (!firstName) {
                    formIsValid = false;
                    formErrors.StudentName = false;

                    console.log(formErrors);
                    // formErrors['FirstNameErr'] = "First Name is required";

                } else {
                    formErrors.StudentName = true;
                }

                // GENDER
                if (gender == '') {
                    formIsValid = false;
                    formErrors.Gender = false;
                    // formErrors['GenderErr'] = "Gender is required";
                } else { formErrors.Gender = true; }


                // YEAR
                if (!year) {
                    formIsValid = false;
                    formErrors.Year = false;
                } else {
                    var yearPattern = /\d{2}/;
                    if (!yearPattern.test(year)) {
                        formIsValid = false;
                        formErrors.Year = false;
                    } else { formErrors.Year = true; }
                }

                // SCHOOL NAME
                if (!schoolName) {
                    formIsValid = false;
                    formErrors.SchoolName = false;
                } else {
                    formErrors.SchoolName = true;
                }

                // HOME ADDRESS
                if (!homeAdd) {
                    formIsValid = false;
                    formErrors.HomeAddress = false;
                } else {
                    formErrors.HomeAddress = true;
                }

                // SUBURB
                if (!subUrb) {
                    formIsValid = false;
                    formErrors.Suburb = false;
                } else {
                    formErrors.Suburb = true;
                }

                // POSTCODE
                if (!postCode) {
                    formIsValid = false;
                    formErrors.PostCode = false;
                } else {
                    formErrors.PostCode = true;
                }

                // STUDENT EMAIL
                if (!studentEmail) {
                    formIsValid = false;
                    formErrors.StuMail = false;
                } else {
                    var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (!mailPattern.test(studentEmail)) {
                        formIsValid = false;
                        formErrors.StuMail = false;
                    } else {
                        formErrors.StuMail = true;
                    }
                }

            }

            this.setState({ formErrors: formErrors, formIsValid: formIsValid })
            if (formIsValid) {
                this.props.nextStep()
            }
            return formIsValid;
        }

        //   for date 
        var curr = new Date();
        curr.getDate();
        var date = curr.toISOString().substring(0, 10);

        return (
            <div className='commanInfoStyle'>
                <p className='formSubtitle'> Student Details </p>

                {/* Row 1 */}
                <div className="child-wrapper">
                    <div className="child-n">
                        <TextField
                            label='First Name'
                            autoComplete='new'
                            error={!formErrors.StudentName}
                            helperText={formErrors.StudentName ? "" : "First Name is required"}
                            fullWidth
                            required
                            defaultValue={values.firstName}
                            onChange={handleChange('firstName')}
                        />
                    </div>
                    <div className="child-n">
                        <TextField
                            label='Last Name'
                            autoComplete='new'
                            fullWidth
                            defaultValue={values.lastName}
                            onChange={handleChange('lastName')}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="dob-gender child-wrapper">
                    <div className="dob child-n">
                        <TextField
                            id="date"
                            label="Date Of Birth"
                            type="date"
                            defaultValue={values.dob}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange('dob')}
                        />
                    </div>
                    <div className="gender child-n">
                        <FormControl>
                            <FormLabel
                                id='gender'
                                required
                                helperText={formIsValid ? "" : "Gender is required"}
                                error={!formErrors.Gender}
                            > Gender </FormLabel>
                            <RadioGroup
                                aria-labelledby='gender'
                                name='gender'
                                onChange={handleChange('gender')}
                                defaultValue={values.gender}
                                row
                            >
                                <FormControlLabel
                                    value='female'
                                    control={<Radio size='small' />}
                                    label='Female'

                                />
                                <FormControlLabel
                                    value='male'
                                    control={<Radio size='small' />}
                                    label='Male'
                                />
                                <FormControlLabel
                                    value='other'
                                    control={<Radio size='small' />}
                                    label='Other'
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="school-year child-wrapper">
                    <div className="school child-n">
                        <TextField
                            label='School Name'
                            fullWidth
                            required
                            defaultValue={values.schoolName}
                            onChange={handleChange('schoolName')}
                            error={!formErrors.SchoolName}
                            helperText={formErrors.SchoolName ? "" : "School Name is required"}
                        />
                    </div>
                    <div className="year child-n">
                        <TextField
                            label='Year'
                            type='number'
                            fullWidth
                            required
                            defaultValue={values.year}
                            onChange={handleChange('year')}
                            error={!formErrors.Year}
                            helperText={formErrors.Year ? "" : "Enter Year in 2 digits only"}

                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="home-suburb child-wrapper">
                    <div className="home child-n">
                        <TextField
                            label='Home Address'
                            multiline
                            fullWidth
                            required
                            defaultValue={values.homeAdd}
                            onChange={handleChange('homeAdd')}
                            error={!formErrors.HomeAddress}
                            helperText={formErrors.HomeAddress ? "" : "home Address is required"}
                        />
                    </div>
                    <div className="suburb child-n">
                        <TextField
                            label='Suburb'
                            fullWidth
                            required
                            defaultValue={values.subUrb}
                            onChange={handleChange('subUrb')}
                            error={!formErrors.Suburb}
                            helperText={formErrors.Suburb ? "" : "Suburb is required"}
                        />
                    </div>
                </div>

                {/* Row 5 */}
                <div className="postCode-stuEmail child-wrapper">
                    <div className="post child-n">
                        <TextField
                            label='Postcode'
                            type='number'
                            fullWidth
                            required
                            defaultValue={values.postCode}
                            onChange={handleChange('postCode')}
                            error={!formErrors.PostCode}
                            helperText={formErrors.PostCode ? "" : "Postcode is required"}
                        />
                    </div>
                    <div className="stuEmail child-n">
                        <TextField
                            label="Student's Email"
                            fullWidth
                            required
                            defaultValue={values.studentEmail}
                            onChange={handleChange('studentEmail')}
                            error={!formErrors.StuMail}
                            helperText={formErrors.StuMail ? "" : "Email is required"}
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="button-wrapper child-wrapper">
                    {/* <div className="btn1-clear child-n">
                            <Button
                                variant='outlined'
                            > Clear </Button>
                        </div> */}
                    <div className="btn1-next child-n" style={{ textAlign: 'right', flex: 1 }}>
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

export default ChildInfo