import React, { Component } from 'react'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

export class TermsConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agree: false
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


    handleChecker = () => {

    }
  render() {
    const {values, handleChange} = this.props;


    return (
      <div>
          <h3> Terms and Conditions </h3>

            <div className="child-wrapper">
                <div className="child-n">
                    <FormControlLabel
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
                        onChange={handleChange('authPerson1')}
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
                        onClick={this.continue}
                        disabled={!this.state.agree}
                    > Continue </Button>

                    
                </div>
            </div>
      </div>
    )
  }
}

export default TermsConditions