import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar'
import './_programme.scss'
import { AiOutlineBarChart } from 'react-icons/ai'
import { AirOutlined } from '@mui/icons-material';


const Programme = () => {

    const [value, setValue] = useState(0);

    const getValue = e => {
        setValue(e.target.value)
    }

    useEffect(() => {

    }, [value]);

    return (
        <div className="prog-wrapper">
            <div className="prog-head-wrapper">
                <div className="head-nav">
                    <Navbar />
                </div>
                <div className="prog-head">
                    <p> Learning Programme </p>
                </div>
            </div>

            <div className="work">
                <div>
                    <h3> How it works? </h3>
                    <p>
                        We help parents find Australia's top small group
                        tutoring to promote kids love and help build
                        confidence.
                    </p>
                </div>
            </div>

            <div className="sessions-flexbox">
                <div className="sessions">
                    <div>
                        <h3> Weekly Sessions & practice </h3>
                        <p>
                            We know some kids struggle to focus for long
                            periods. So the partners we recommended offer group
                            tutoring in two parts - an 'hour of power' <b>45-min </b>
                            tutoring session; filled with learning, challenges
                            and fun. Then to reinforce knowledge and keep students
                            on track they assign weekly practice to complete
                            before the next learning session.
                        </p>
                    </div>
                </div>

                <div className="sessions">
                    <div>
                        <h3> Small Groups of up to 5 </h3>
                        <p>
                            Kids love being part of something. With Small Group
                            tutoring, they'll make new friends and can study with
                            each week - helping and encouraging them to do better
                            whilst also building their personal confidence.
                            Small groups led by friendly & patient tutors, along with
                            another assistant tutor, ensures each student gets the
                            time to speak up, ask questions and be heard.
                        </p>
                    </div>
                </div>
            </div>

            <div className="sessions">
                <div>
                    <h3> Programs Guided by Australian Curriculum </h3>
                    <p>
                        What they are learning at school is what they'll focus on
                        in their tutoring sessions. <br /> <br />
                        The Small Group tutoring is aligned to the national curriculum,
                        with variations included to suit each state. So you can be assured
                        that what they're learning in their tutoring centre will help
                        them do better at school.
                    </p>
                </div>
            </div>

            <div className="divider">
                <p> TIMINGS </p>
            </div>

            <div className="timings-wrapper1">
                <div className='timeHead'>
                    <p> Primary Student - Year 6 </p>
                </div>
                <div className="timeFlexbox">
                    <div className="sessionBox-contain">
                        <div id='sessContainer2'>
                            <div className="sessionBox">
                                <p> <AiOutlineBarChart
                                    size={60}
                                /> </p>
                                <p> Monday - Friday </p>
                            </div>
                        </div>
                    </div>
                    <div className="sessionTable">
                        <table>
                            <tr>
                                <td className='col1'>
                                    <p> 03:30PM <br /> | <br /> 05:00PM  </p>
                                </td>
                                <td className='col2'>
                                    <div>
                                        <p> Maths and English </p>
                                    </div>
                                </td>

                                <td className='col3'>
                                    <div>
                                        <p> Session 1 </p>
                                        <p> 45 min </p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='col1'>
                                    <p> 03:30PM <br /> | <br /> 05:00PM  </p>
                                </td>
                                <td className='col2'>
                                    <div>
                                        <p> Maths and English </p>
                                    </div>
                                </td>

                                <td className='col3'>
                                    <div>
                                        <p> Session 1 </p>
                                        <p> 45 min </p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='col1'>
                                    <p> 03:30PM <br /> | <br /> 05:00PM  </p>
                                </td>
                                <td className='col2'>
                                    <div>
                                        <p> Maths and English </p>
                                    </div>
                                </td>

                                <td className='col3'>
                                    <div>
                                        <p> Session 1 </p>
                                        <p> 45 min </p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programme;