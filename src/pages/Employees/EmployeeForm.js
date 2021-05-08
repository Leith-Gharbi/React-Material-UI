import React, { useEffect, useState } from 'react';
import Form, { useForm } from '../../components/useForm';
import Controls from '../../components/controls/controls';
import { Grid } from '@material-ui/core';
import * as employeeServices from '../../services/employeeServices';

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'this field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 7 ? '' : 'Minimum 8 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? '' : 'this field is required.';
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };

  const genderItems = [
    {
      id: 'male',
      title: 'Male',
    },
    {
      id: 'female',
      title: 'Female',
    },
    {
      id: 'other',
      title: 'Other',
    },
  ];
  const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
  };
  const {
    values,
    resetForm,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  } = useForm(initialFValues, true, validate);

  useEffect(() => {}, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) addOrEdit(values, resetForm);
  };
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            error={errors.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            label="Gender"
            items={genderItems}
          ></Controls.RadioGroup>
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            error={errors.departmentId}
            onChange={handleInputChange}
            options={employeeServices.getDepartementCollection}
            error={errors.departmentId}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          ></Controls.DatePicker>
          <div>
            <Controls.Button text="Submit" type="submit" />

            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
