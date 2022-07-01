import './_box.scss';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import {FaRegUserCircle, FaAccusoft} from 'react-icons/fa';
import { Button } from '@mui/material';

const Box = (props) => {
    const name = props.name;
    const content = props.content;
    const icon = props.icon;
    var ico;

    
    return (
        <div className="box-wrapper">
            <div className="boxDiv1">
                
            </div>
            <div className="boxDiv2">
                {/* <PersonPinOutlinedIcon className='personIcon' fontSize='large' /> */}
                <FaAccusoft className='personIcon' />
            </div>
            <div className="boxDiv3">
                <p> {name} </p>
            </div>
            <div className="boxDiv4">
                <button> Know More </button>
                <p> {content} </p>
            </div>

        </div>
    );
}
 
export default Box;