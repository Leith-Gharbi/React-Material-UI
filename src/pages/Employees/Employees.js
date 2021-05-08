import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from '../Employees/EmployeeForm';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import Controls from '../../components/controls/controls';
import * as employeeServices from '../../services/employeeServices';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
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
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Popup from '../../components/Popup';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'departement', label: 'Departement', disableSorting: true },
  { id: 'action', label: 'Action', disableSorting: true },
];
export default function Employees() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, SetRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, SetFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
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

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    SetRecords(employeeService.getAllEmployees());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation "
        icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
      ></PageHeader>

      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employ"
            className={classes.searchInput}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          ></Controls.Input>
          <Controls.Button
            className={classes.newButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddCircleOutlineRoundedIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          ></Controls.Button>
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
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton color="secondary">
                    <HighlightOffTwoToneIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
