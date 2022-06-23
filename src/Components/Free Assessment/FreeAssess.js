import { Button, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './_free.scss';



const FreeAssessment = () => {
    return (
        <div className="assessment-wrapper">
            <div className="assessment-container">
                <div className="assessment-title">
                    <o> Get Free Assessment Now! </o>
                </div>
                <div className="assessment-button">
                    <Button variant='contained' id="btn">
                        Get here &nbsp; <ArrowCircleRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default FreeAssessment;