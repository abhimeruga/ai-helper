import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

const CustomButton : React.FC<ButtonProps> = (props) => {
    return (
        <Button variant="contained" {...props}> {props.name} </Button>
    )
}

export default CustomButton;