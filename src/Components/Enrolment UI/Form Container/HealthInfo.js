import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import React, { Component } from 'react'
import '../_enrol.scss'

export class HealthInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prob1: '',
            prob2: '',
            prob3: '',
            prob4: '',
            formIsValid: true,
            formErrors: {
                H1: true,
                H2: true,
                H3: true,
                H4: true,
            }
        }
    }



    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleCondition1 = (e) => {
        this.setState({ prob1: e.target.value });
    }

    render() {
        const { values, handleChange } = this.props;
        const { values: { foodAllergy, medication } } = this.props
        const { prob1, prob2, prob3, prob4, formErrors } = this.state;

        const handleValidate = () => {
            let formIsValid = true;
            let formErrors = {};

            if (formIsValid) {
                if (!prob1) {
                    formIsValid = false;
                    formErrors.H1 = false;
                } else {
                    formErrors.H1 = true;
                }

                if (!prob2) {
                    formIsValid = false;
                    formErrors.H2 = false;
                } else {
                    formErrors.H2 = true;
                }

                if (!prob3) {
                    formIsValid = false;
                    formErrors.H3 = false;
                } else {
                    formErrors.H3 = true;
                }

                if (!prob4) {
                    formIsValid = false;
                    formErrors.H4 = false;
                } else {
                    formErrors.H4 = true;
                }

            }

            this.setState({ formErrors: formErrors, formIsValid: formIsValid });

            if(!formIsValid){
                this.props.nextStep();
            }
        }


        return (
            <div className='commanInfoStyle'>
                <p className='formSubtitle'> Child's Health and Medical Conditions </p>
                <div className="condition-wrapper">
                    <FormControl fullWidth>
                        <InputLabel id='alergy-food'> Is your child allergic to any food? </InputLabel>
                        <Select
                            labelId='alergy-food'
                            id='1'
                            label='Is your child alergic to any food?'
                            defaultValue={prob1}
                            onChange={(e) => {
                                this.setState({ prob1: e.target.value });
                            }}
                            error={!formErrors.H1}

                        >
                            <MenuItem value='yes' > Yes </MenuItem>
                            <MenuItem value='no'> No </MenuItem>
                        </Select>
                    </FormControl>
                    {/* {this.state.prob1 =='yes'
                        &&
                        <TextField
                            fullWidth
                            placeholder='write details here'
                            defaultValue={foodAllergy}
                            handleChange={handleChange('foodAllergy')}
                        />} */}

                    <FormControl fullWidth>
                        <InputLabel id='medication'> Is your child on medication? </InputLabel>
                        <Select
                            labelId='medication'
                            id='2'
                            label='Is your child on medication?'
                            defaultValue={prob2}
                            onChange={(e) => this.setState({ prob2: e.target.value })}
                            error={!formErrors.H2}
                        // onClick={this.handleChange('foodAllergy')}
                        >
                            <MenuItem value='yes'> Yes </MenuItem>
                            <MenuItem value='no' > No </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id='alergy-medication'>Does your child allergic to any medications?  </InputLabel>
                        <Select
                            labelId='alergy-medication'
                            label='Does your child alergic to any medications?'
                            defaultValue={prob3}
                            onChange={(e) => this.setState({ prob3: e.target.value })}
                            error={!formErrors.H3}

                        >
                            <MenuItem value='yes' > Yes </MenuItem>
                            <MenuItem value='no' > No </MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Does your child suffer from any health problem?  </InputLabel>
                        <Select
                            label='Does your child suffer from any health problem?'
                            defaultValue={prob4}
                            onChange={(e) => this.setState({ prob2: e.target.value })}
                            error={!formErrors.H4}
                        >
                            <MenuItem value='yes' > Yes </MenuItem>
                            <MenuItem value='no' > No </MenuItem>
                        </Select>
                    </FormControl>
                </div>

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

export default HealthInfo