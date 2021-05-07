import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from '../Employees/EmployeeForm';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import Controls from '../../components/controls/controls';
import {
  Paper,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  InputAdornment,
} from '@material-ui/core';
import useTable from '../../components/controls/useTable';
import * as employeeService from '../../services/employeeServices';
import { Search } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
}));

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'departement', label: 'Departement', disableSorting: true },
];
export default function Employees() {
  const classes = useStyles();

  const [records, SetRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, SetFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TableContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    SetFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation "
        icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
      ></PageHeader>

      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input
            label="Search Employ"
            className={classes.searchInput}
            onClick={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          ></Controls.Input>
        </Toolbar>
        <TableContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
