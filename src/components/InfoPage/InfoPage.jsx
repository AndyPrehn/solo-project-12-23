import React from "react";
import "./InfoPage.css";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <div>
        <h3>Technologies Used:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
        </ul>
        <div className="futurePlans">
          <h3>Future Plans</h3>
          <ul>
            <li>Add the ability to auto pull in user accounts</li>
            <li>
              Add a function that creates an average monthly budget, month over month
            </li>
            <li>Switch to a game version of this app</li>
          </ul>
          <div className="thanks">
            <h3>Thanks</h3>
            <p>
              Thanks to my family & friends, 
              my co-workers and leaders, 
              Prime Digital Academy, 
              the amazing and talented people in Taaffeite Cohort,
              and our wickedly talented instructor, Chris Black, for his patience
              and guidance through this fast paced, whirlwind journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
