import React ,{useEffect,useState} from 'react'
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles= makeStyles(theme=>({

root:{
'& .MuiFormControl-root':{
    width:'80%',
    margin : theme.spacing(1)

}
}

}))



export default function EmployeeForm() {
const classes = useStyles();
    const initialFValues ={
        id : 0 , 
        fullName:'',
        email:'',
        mobile:'',
        city:'',
        gender:'male',
        departmentId:'',
        hireDate : new Date(),
        isPermanent : false,
    }

    const[values,setValues]=useState(initialFValues); 

    useEffect(()=>{

    },[values]);

    const handleInputChange =e=>{
const {name,value}= e.target;
setValues({...values , [name]:value})
    }

    return (
        <form className={classes.root}>
            <Grid coantainer>
            <Grid item xs={6}>
            <TextField 
            variant="outlined"
             label="Full Name"
             name='fullName'
              value={values.fullName}
              onChange={handleInputChange}
              />
            <TextField 
            variant="outlined"
            name='email'
             label="Email"
              value={values.email}/>
            </Grid>
            <Grid item xs={6}>
            </Grid>

            </Grid>
            
        </form>
    )
}
