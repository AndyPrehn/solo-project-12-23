import axios from "axios";
import { useEffect, useState } from "react";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeList from "../IncomeList/IncomeList";
// import "./Income.css";

function IncomePage() {
  return (
    <div>
      <IncomeForm />
      <IncomeList />
    </div>
  );
}

export default IncomePage;