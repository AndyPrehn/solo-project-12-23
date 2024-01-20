import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function DashboardList() {
    const dashboardList = useSelector(store=> store.dashboard);
    const dispatch=useDispatch();
  

   useEffect(()=> {
dispatch({type: 'FETCH_DASHBOARD'})
console.log(dashboardList, 'is dashboardList');
   }, []);
  
   const removeTask = (id) => {
    axios.delete(`/api/dashboard/${id}`).then((response) => {
        console.log(`Task id:${id} deleted`)
        dispatch({type: 'FETCH_DASHBOARD'})
    })
        .catch((error) => {
            console.error("Error in DELETE '/dashboard/:id' inside removeTask().", error);
            alert("Something went wrong");
        })
}
return (
 
    // map over the expenseslist array
    //     render on the DOM using tags
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Account </TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Source</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Payee</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardList.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.account}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.source}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.payee}</TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center"><button onClick={() => console.log(dashboardList, 'dashboardList')} >Remove </button></TableCell>
            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}export default DashboardList;