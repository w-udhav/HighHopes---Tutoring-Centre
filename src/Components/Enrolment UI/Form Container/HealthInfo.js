import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import React, { Component } from 'react'

export class HealthInfo extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const handleConditional = (e) => {
        if(e.target.value=='yes'){

        }
    }
    
    const {values, handleChange} = this.props;
    console.log(values)

    return (
      <div className='healthInfo'>
          <h3>{values} Child's Health and Medical Conditions </h3>
            <div className="condition-wrapper">
                <FormControl fullWidth>
                    <InputLabel id='alergy-food'> Is your child alergic to any food? </InputLabel>
                    <Select
                        labelId='alergy-food'
                        label='Is your child alergic to any food?'
                        onChange={handleConditional}
                    >
                        <MenuItem value='yes'> Yes </MenuItem>
                        <MenuItem value='no'> No </MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id='medication'> Is your child on medication? </InputLabel>
                    <Select
                        labelId='medication'
                        label='Is your child on medication?'
                    >
                        <MenuItem> Yes </MenuItem>
                        <MenuItem> No </MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id='alergy-medication'>Does your child alergic to any medications?  </InputLabel>
                    <Select
                        labelId='alergy-medication'
                        label='Does your child alergic to any medications?'
                    >
                        <MenuItem> Yes </MenuItem>
                        <MenuItem> No </MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Does your child suffer from any health problem?  </InputLabel>
                    <Select
                        label='Does your child suffer from any health problem?'
                    >
                        <MenuItem> Yes </MenuItem>
                        <MenuItem> No </MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="button-wrapper child-wrapper">
                <div className="btn2-prev child-n">
                    <Button
                        label='Back'
                        variant='outlined'
                        style={{color:'blue'}}
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

export default HealthInfo