import './_box.scss';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import { FaRegUserCircle, FaAccusoft } from 'react-icons/fa';
import { Button } from '@mui/material';
import { AiFillPieChart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Box = (props) => {
    const name = props.name;
    const content = props.content;
    const icon = props.icon;


    return (
        <div className="box-wrapper">
            <div className="boxDiv1">

            </div>
            <div className="boxDiv2">
                {/* <PersonPinOutlinedIcon className='personIcon' fontSize='large' /> */}
                { icon == '1' && <FaAccusoft className='personIcon' /> }
                { icon == '2' && <PersonPinOutlinedIcon className='personIcon' fontSize='large' /> }
                { icon == '3' && <AiFillPieChart className='personIcon' /> }
                { icon == '4' && <FaRegUserCircle className='personIcon' /> }
            </div>
            <div className="boxDiv3">
                <p> {name} </p>
            </div>
            <div className="boxDiv4">
                <button>
                    { icon=='1' && <Link to='/about' > Know More </Link> }
                    { icon=='2' && <Link to='#' > Know More </Link> }
                    { icon=='3' && <Link to='/programme' > Know More </Link> }
                    { icon=='4' && <Link to='/about' > Know More </Link> }
                </button>
                <p> {content} </p>
            </div>

        </div>
    );
}

export default Box;