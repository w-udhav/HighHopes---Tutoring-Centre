import Navbar from "../navbar/Navbar";
import UserForm from "./Form Container/UserForm";
import './_enrol.scss'

const EnrolForm = () => {


    return (
        <div className="enrol-form-container">
            <div className="enrol-head-wrapper">
                <div className="head-nav">
                    <Navbar />
                </div>
                <div className="enrol-head">
                    <p> Enrolment Form </p>
                </div>
            </div>

            <div className="enrol-para">
                <div className="enrol-imgSide">
                    <p> Self <br /> Care <br /> isn't <br /> selfish </p>
                </div>
                <div className="para-context">
                    <p> Finally! You have reached here... </p>
                    <p>
                        Do you know that you can enrol to High Hopes 
                        Tutoring Centre just by filling the form below.
                        <br /> <br />
                        We are there for your children. Allow us to give a try.
                    </p>
                    <p>
                        Enter your details and we'll callback to you soon.
                    </p>
                </div>
            </div>

            <div className="enrol-form-here">
                <div id='formHere'>
                    <p> Form here </p>
                </div>
                <div className="form-container">
                    <UserForm />
                </div>
            </div>

        </div>
    );
}

export default EnrolForm;