import React ,{useEffect,useState} from 'react'
import Form, {useForm} from '../../components/useForm';
import Controls from '../../components/controls/controls'
import { Grid } from '@material-ui/core';
import * as employeeServices from '../../services/employeeServices';




export default function EmployeeForm() {

    const genderItems=[
        {
            id:'male',title:"Male"
        },
        {
            id:'female',title:"Female"
        },
        {
            id:'other',title:"Other"
        }
    ]
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
const {values,setValues,handleInputChange} = useForm(initialFValues);

    useEffect(()=>{

    },[values]);

 
    return (
            <Form>
       <Grid coantainer>
            <Grid item xs={6}>
                <Controls.Input label="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}/>
          
            <Controls.Input 
            name='mobile'
             label="Mobile"
              value={values.mobile}j
              onChange={handleInputChange}/>
                  <Controls.Input 
            name='city'
             label="City"
              value={values.city}
              onChange={handleInputChange}/>
                  <Controls.Input 
            name='email'
             label="Email"
              value={values.email}
              onChange={handleInputChange}/>
            </Grid>
            <Grid item xs={6}>

<Controls.RadioGroup  
 name='gender'
 value={values.gender}
onChange={handleInputChange}
label="Gender" 
items={genderItems}
>


</Controls.RadioGroup>
<Controls.Select
 name='departmentId'
 label="Department"
 value={values.departmentId}
onChange={handleInputChange}
 options={employeeServices.getDepartementCollection}/>
               <Controls.Checkbox name="isPermanent"
                label="Permanent Employee"
 value={values.isPermanent}
onChange={handleInputChange}/>

<Controls.DatePicker  name='hireDate'
 label="Hire Date"
 value={values.hireDate}
onChange={handleInputChange} >

</Controls.DatePicker>
<div>
    <Controls.Button  text="Submit" type="submit"/>

    <Controls.Button text="Reset" color="default" />
</div>
            </Grid>

            </Grid>
            </Form>
    )
}
