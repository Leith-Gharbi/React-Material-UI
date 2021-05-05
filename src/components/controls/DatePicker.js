import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

export default function DatePicker(props) {
    const {name,value,onChange ,label}=props;
    const convertToDefEventParameter =(name,value) =>({
        target:{
            name,value
        }
        })
    return (
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker disableToolbar 
variant="inline"  
inputVariant="outlined" 
formate="MMM/dd/yyyy"
name={name}
value={value}
onChange={date => onChange(convertToDefEventParameter (name,date))}
label={label}/>

       </MuiPickersUtilsProvider>
    )
}
