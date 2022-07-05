import Navbar from '../navbar/Navbar';
import './_header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="head-nav">
                <Navbar />
            </div>
            <div className="head-title">
                <p> HIGH HOPES <br /> <span>TUTORING <br /> CENTRE </span></p>
                {/* <p> Learners Today <br /> Leaders Tomorrow </p> */}

            </div>
            <div className="head-line">
                <p> Learners Today </p>
                <p>Leaders Tomorrow </p>
            </div>
        </div>
    );
}
 
export default Header;