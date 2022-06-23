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
                <div className="para-context">
                    <p> Fill up your form here </p>
                </div>
            </div>

            <div className="enrol-form-here">
                <p> Form here </p>
                <div className="form-container">
                    <UserForm />
                </div>
            </div>

        </div>
    );
}
 
export default EnrolForm;