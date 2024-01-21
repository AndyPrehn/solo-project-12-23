import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardList from "../DashboardList/DashboardList";
// import "./Dashboard.css";


function DashboardPage() {
  return (
    <div>
      <DashboardList /> 
    </div>
  );
}

export default DashboardPage;