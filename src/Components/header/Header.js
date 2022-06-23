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
            </div>
        </div>
    );
}
 
export default Header;