import { Button, TextField } from '@mui/material';
import React from 'react'
import './_free.scss'



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
                to: 'ujjwal pratap singh',
                mailsubject: '',
                description: '',
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        let { formIsValid, formErrors, mailStatus } = this.state;
        let { name, email, subject, message, description, to, mailsubject } = this.state.user;

        const submitEmail = async (data) => {
            await fetch("https://localhost:3000/send", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    // 'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': 'https://localhost:3000',
                    // 'withCredentials': true,
                    // 'Access-Control-Allow-Credentials':'true',
                    // 'Access-Control-Allow-Methods': 'POST'
                },
                body: JSON.stringify(data),
                // mode:'cors',
                // credentials: 'include'
            })

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
                    let data = {
                        name,
                        email,
                        subject,
                        message
                    }
                    submitEmail(data);
                    console.log("Email sent")
                    this.setState({ mailStatus: true })
                } catch (error) {
                    console.log(error);
                }
            }
        };


        return (
            <div className='formContainer'>
                <div className="form-wrapper">
                    <p> Book A Free Assessment Today </p>
                    {
                        !mailStatus ?
                            <form>
                                <div>
                                    <TextField
                                        label='Name'
                                        fullWidth
                                        values={name}
                                        onChange={(e) => {
                                            name = e.target.value;
                                        }}
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
                                        onChange={(e) => {
                                            email = e.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label='Subject'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Subject}
                                        values={subject}
                                        onChange={(e) => {
                                            subject = e.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label='Message'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Message}
                                        values={message}
                                        onChange={(e) => {
                                            message = e.target.value;
                                        }}
                                    />
                                </div>
                                <Button
                                    variant='contained'
                                    onClick={handleSubmit}
                                > Submit </Button>
                            </form>
                            :
                            <div>
                                <div class="success-checkmark">
                                    <div class="check-icon">
                                        <span class="icon-line line-tip"></span>
                                        <span class="icon-line line-long"></span>
                                        <div class="icon-circle"></div>
                                        <div class="icon-fix"></div>
                                    </div>
                                </div>
                                <div className="mailStatus">
                                    <p className='formSubtitle'> Mail Sent </p>
                                    <p> Thank you for your visit. We will respond to you soon.</p>
                                    <p> If you faced any issue, please try again or try sending the mail manually </p>
                                    <p> <a href='mailto:highhopestutoring.canningvale@gmail.com'> Click here </a> </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}