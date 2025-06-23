import { useNavigate } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CustomButton from "./CustomButton"

import "./Card.styles.css"

export default function OutlinedCard(props : card) {
    const navigate = useNavigate();
    const {name, description, shortKey} = props;


    return (
        <Card className='card-container' variant="outlined">
            <CardContent>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            {/* <hr/> */}
            {'________________________'}
            <Typography variant="body2">
                <br/>
                {description}
                <br />
            </Typography>
            </CardContent>
            <CardActions>
                <CustomButton onClick={()=>navigate(`chat/:${shortKey}`)} name="Ask Question" style={{color : '#a9ddc5', backgroundColor: '#096B68'}} size="small" />
            </CardActions>
        </Card>
    );
}

type card = {
    id : number,
    name : string,
    description : string,
    shortKey : string
}