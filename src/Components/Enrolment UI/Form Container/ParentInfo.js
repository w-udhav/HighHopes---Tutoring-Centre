import { TextField, Button } from '@mui/material'
import React, { Component } from 'react'
import '../_enrol.scss'

export class ParentInfo extends Component {
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
      <div className='parentInfo'>
          <h3> Parents/Guardian's Information </h3>

{/* Row 1 */}
          <h4> Detail 1 </h4>
            <div className="parent-name-relation child-wrapper">
                <div className="parent-name child-n">
                    <TextField
                        label='Name'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('parentName1')}
                    />
                </div>
                <div className="parent-relation child-n">
                <TextField
                        label='Relation'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('relation1')}
                    />
                </div>
            </div>

{/* Row 2 */}
            <div className="parent-email-contact child-wrapper">
                <div className="parent-email child-n">
                    <TextField
                        label='Email'
                        type='email'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('parentEmail1')}
                    />
                </div>
                <div className="parent-relation child-n">
                <TextField
                        label='Contact No.'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('parentCont1')}

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
                        onChange={handleChange('parentName2')}

                    />
                </div>
                <div className="parent-relation child-n">
                <TextField
                        label='Relation'
                        fullWidth
                        variant='outlined'
                        onChange={handleChange('relation2')}

                    />
                </div>
                
            </div>

{/* Row 4 */}
            <div className="parent-email-contact child-wrapper">
                <div className="parent-email child-n">
                    <TextField
                        label='Email'
                        type='email'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('parentEmail2')}

                    />
                </div>
                <div className="parent-relation child-n">
                <TextField
                        label='Contact No.'
                        fullWidth
                        variant='outlined'
                        required
                        onChange={handleChange('parentCont2')}

                    />
                </div>
            </div>

{/* Buttons */}
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

export default ParentInfo