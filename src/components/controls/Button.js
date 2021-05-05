import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core';


const useStyles=makeStyles(theme =>({
root:{
    margin : theme.spacing(0.5)
},
label :{
    textTransform :'none'
}

}))
export default function Button(props) {

    const {text,size,onClick ,color,variant , ...other}=props;
    const classes = useStyles();
    return (
      <MuiButton 
      classes={{root : classes.root , label : classes.label}}
      variant={variant ||"contained"}
       size={size || "large"}
        onClick={onClick}
        {...other}
         color={color || "primary"}>
{text}
</MuiButton>
    )
}
