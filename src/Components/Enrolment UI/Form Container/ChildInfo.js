import React, { Component } from 'react'
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField , FormControl, Button} from '@mui/material';
import '../_enrol.scss'
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
// import { FormControl } from 'react-';


export class ChildInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
    const { values, handleChange } = this.props;


    //   for date 
    var curr = new Date();
    curr.getDate();
    var date = curr.toISOString().substring(0,10);
    
    
    return (
      <div className='childinfo'>
        <h3> Child's Information </h3>

        {/* Row 1 */}
        <div className="child-name child-wrapper">
            <div className="child-name-first child-n">
                <TextField
                    label='First Name'
                    autoComplete='new'
                    fullWidth
                    required
                    onChange={handleChange('firstName')}
                />
            </div>
            <div className="child-name-last child-n">
                <TextField
                    label='Last Name'
                    autoComplete='new'
                    fullWidth
                    required
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
                    defaultValue={date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange('dob')}
                />
            </div>
            <div className="gender child-n">
                <FormControl>
                    <FormLabel id='gender' required> Gender </FormLabel>
                    <RadioGroup
                        aria-labelledby='gender'
                        name='gender'
                        onChange={handleChange('gender')}
                        row
                    >
                        <FormControlLabel
                            value='female'
                            control={<Radio size='10' />}
                            label='Female'
                            
                        />
                        <FormControlLabel
                            value='male'
                            control={<Radio size='10' />}
                            label='Male'
                        />
                        <FormControlLabel
                            value='other'
                            control={<Radio size='10' />}
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
                        onChange={handleChange('schoolName')}

                    />
                </div>
                <div className="year child-n">
                    <TextField
                        label='Year'
                        type='number'
                        fullWidth
                        required
                        onChange={handleChange('year')}

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
                        onChange={handleChange('homeAdd')}
                    />
                </div>
                <div className="suburb child-n">
                    <TextField
                        label='Suburb'
                        fullWidth
                        required
                        onChange={handleChange('subUrb')}

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
                        onChange={handleChange('postCode')}

                    />
                </div>
                <div className="stuEmail child-n">
                    <TextField
                        label="Student's Email"
                        type='email'
                        fullWidth
                        required
                        onChange={handleChange('postCode')}

                    />
                </div>
            </div>

            {/* Button */}
            <div className="button-wrapper child-wrapper">
                <div className="btn1-clear child-n">
                    <Button
                        variant='outlined'
                    > Clear </Button>
                </div>
                <div className="btn1-next child-n" style={{textAlign:'right',flex:1}}>
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

export default ChildInfo