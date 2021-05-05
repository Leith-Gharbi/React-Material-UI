import { FormControl, InputLabel ,MenuItem,Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function Select(props) {
    const {name,value,onChange ,label,options}=props;
console.log(options)
    return (
        <FormControl variant="outlined">
<InputLabel>{label}</InputLabel>
<MuiSelect   
label={label}
name={name}
value={value}
onChange={onChange}>
<MenuItem value=''>None</MenuItem>
{
    options.map(item=>(
        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
}
    </MuiSelect>
        </FormControl>
    )
}