import { TextField, Button } from '@mui/material'
import React, { Component } from 'react'

export class EmergencyInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const {values, handleChange} = this.props;

    return (
      <div>
           <h3> Emergency Contact <code> (other than parent's or guardian's) </code> </h3>
           <p> If the child's parents/guardian can not be contacted, the following nominated authorized person will be contacted </p>

            <h4> (1) Authorized Contact Person </h4>

            <div className="Auth-wrapper child-wrapper">
                <div className="child-n">
                    <TextField
                        label='Person Name'
                        fullWidth
                        required
                        onChange={handleChange('authPerson1')}
                    />
                </div>
                <div className="child-n">
                    <TextField
                        label='Contact Number'
                        type='number'
                        fullWidth
                        required
                        onChange={handleChange('authCont1')}
                    />
                </div>
            </div>
            <div className="child-wrapper">
                <div className="child-n">
                    <TextField
                        label='Relationship'
                        fullWidth
                        required
                        onChange={handleChange('authRelation1')}
                    />
                </div>
            </div>

            <h4> (2) Authorized Contact Person </h4>

            <div className="Auth-wrapper child-wrapper">
                <div className="child-n">
                    <TextField
                        label='Person Name'
                        fullWidth
                        onChange={handleChange('authPerson2')}
                    />
                </div>
                <div className="child-n">
                    <TextField
                        label='Contact Number'
                        type='number'
                        fullWidth
                        onChange={handleChange('authCont2')}
                    />
                </div>
            </div>
            <div className="child-wrapper">
                <div className="child-n">
                    <TextField
                        label='Relationship'
                        fullWidth
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
                        onClick={this.continue}
                    > Continue </Button>
                </div>
            </div>
      </div>
    )
  }
}

export default EmergencyInfo