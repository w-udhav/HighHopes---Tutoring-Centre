import { Button, TextField } from '@mui/material';
import React from 'react'
import axios from 'axios'



export class AssessmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                Name: true,
                Email: true,
                Subject: true,
                Message: true
            },
            formIsValid: true,
            user: {
                to: '',
                mailsubject: '',
                description: '',
                name: "",
                email: "",
                subject: "",
                message: "",
            },
            mailStatus: '',
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    

    


    render() {
        const { name, email, subject, message, user, to, mailsubject, description, formIsValid, formErrors } = this.state;

        const submitEmail = async (e) => {
            e.preventDefault();
            // console.log({ mailerState });
            await fetch("http://localhost:4000/send", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
            })
            //   .then((res) => res.json())
            //   .then(() => {
            //     setMailerState({
            //       email: "",
            //       name: "",
            //       message: "",
            //     });
            //   });
          };

        const handleSubmit = async e => {
            e.preventDefault();
            //Validation
            let formErrors = {};
            let formIsValid = true;
            if (formIsValid) {
                if (!name) {
                    formIsValid = false;
                    formErrors.Name = false;
                } else {
                    formErrors.Name = true;
                }
                // Email
                if (!email) {
                    formIsValid = false
                    formErrors.Email = false
                } else {
                    var mailPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (!mailPatter.test(email)) {
                        formIsValid = false
                        formErrors.Email = false
                    } else {
                        formErrors.Email = true
                    }
                }
                // Subject
                if (!subject) {
                    formIsValid = false;
                    formErrors.Subject = false;
                } else {
                    formErrors.Subject = true;
                }

                if (!message) {
                    formIsValid = false;
                    formErrors.Message = false;
                } else {
                    formErrors.Message = true;
                }
            }
            this.setState({ formErrors: formErrors, formIsValid: formIsValid })

            // Main Email Sending
            if (formIsValid) {
                try {
                    await axios.post('https://localhost:4000/send', { user })
                } catch (error) {
                    console.log(error);
                }
                // .then(response => this.setState({ mailStatus: response.data.respMsg }))
            }
        };


        return (
            <div className='formContainer'>
                <div className="form-wrapper">
                    <p> Book A Free Assessment Today </p>
                    <form>
                        <div>
                            <TextField
                                label='Name'
                                fullWidth
                                values={name}
                                onChange={this.handleChange('name')}
                                variant='outlined'
                                error={!formErrors.Name}
                            />
                        </div>
                        <div>
                            <TextField
                                label='Email'
                                fullWidth
                                variant='outlined'
                                error={!formErrors.Email}
                                values={email}
                                onChange={this.handleChange('email')}
                            />
                        </div>
                        <div>
                            <TextField
                                label='Subject'
                                fullWidth
                                variant='outlined'
                                error={!formErrors.Subject}
                                values={subject}
                                onChange={this.handleChange('subject')}
                            />
                        </div>
                        <div>
                            <TextField
                                label='Message'
                                fullWidth
                                variant='outlined'
                                error={!formErrors.Message}
                                values={message}
                                onChange={this.handleChange('message')}
                            />
                        </div>
                        <Button
                            variant='contained'
                            onClick={handleSubmit}
                        > Submit </Button>

                        <Button
                            onClick={submitEmail}
                        > Send </Button>
                    </form>
                    <p> {name} </p>
                    <p> {email} </p>
                    <p> {subject} </p>
                    <p> {message} </p>
                </div>
            </div>
        )
    }
}