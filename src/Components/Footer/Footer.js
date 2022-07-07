import './_footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillTwitterCircle, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="footerWrapper">
                <div className="footerHead">
                    <p> HIGH HOPES </p>
                </div>
                <div className="footerLinks">
                    <div className="nav-wrapp">
                        <ul id='menu'>
                            <li>
                                <Link to='/'> Home </Link>
                            </li>
                            <li>
                                <Link to='/enrol'> Enrol </Link>
                            </li>
                            <li>
                                <Link to='/programme'> Programme </Link>
                            </li>
                            <li>
                                <Link to='/about'> About </Link>
                            </li>
                            <li>
                                <Link to='/contact'> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="socialMedia">
                    <div>
                        <p> <a href='#' > <AiFillTwitterCircle size={30} /> </a> </p>
                        <p> <a href='#' > <BsFacebook size={30} /> </a> </p>
                        <p> <a href='#' > <AiOutlineInstagram size={30} /> </a> </p>
                    </div>
                </div>
                <div className="copyright">
                    <p> Copyright <AiOutlineCopyright /> 2022. All rights reserverd. This site is made using React. </p>
                </div>
            </div>
        </div>
    )
}

export default Footer