import React from "react";
import { TextField, TextFieldProps } from "@mui/material";


const CustomTextField: React.FC<TextFieldProps> = (props) => {

    const {label} = props;
    return (
        <TextField 
            multiline
            id="outlined-multiline-flexible"
            label={label}
            {...props}
        />
    )
}


export default CustomTextField;