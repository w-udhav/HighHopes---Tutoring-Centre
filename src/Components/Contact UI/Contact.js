import React from 'react'
import Navbar from '../navbar/Navbar'
import './_contact.scss'
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className="contact-head-wrapper">
        <div className="head-nav">
          <Navbar />
        </div>
        <div className="contact-head">
          <p> Contact </p>
        </div>
      </div>

      {/* Box */}
      <div className="contactFillerContatiner">
        <div className="fillerWrapper">
          <p>
            At High Hopes Tutoring centre, we aim to personalize every session to meet the needs of our students, and focus on areas on which the students have the potential to improve.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="mainContainer">
        <div className="mainFlexbox">
          <div className="mainLeftPane">
            <p> Where to find us? </p>
          </div>
          <div className="mainRightPane">
            <p> Contact Details : </p>
            <p> High Hopes Tutoring Centre </p>
            <p> Suite 18, 2 Batman Road Canning Vale </p>
            <p> <AiOutlineMobile /> Mb: 0404-497-732 </p>
            <p> <AiOutlineMail /> Email: <a href='mailto:highhopestutoring.canningvale@gmail.com'> High_Hopes </a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact