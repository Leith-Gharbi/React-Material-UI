import { FormControl, FormControlLabel ,Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

export default function Checkbox(props) {
    const {name,value,onChange ,label}=props;
const convertToDefEventParameter =(name,value) =>({
target:{
    name,value
}
})

    return (
       <FormControl>
<FormControlLabel
 control={<MuiCheckbox name={name} color="primary" checked={value} onChange={e => onChange(convertToDefEventParameter (name,e.target.checked))}/>} label={label} />
       </FormControl>
    )
}
