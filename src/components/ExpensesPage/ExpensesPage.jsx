import axios from "axios";
import { useEffect, useState } from "react";
import ExpensesForm from "../ExpensesForm/ExpensesForm";
import ExpensesList from "../ExpensesList/ExpensesList";
// import "./ d.css";

function ExpensesPage() {



  return (
    <div>
      <ExpensesForm />
      <ExpensesList />
    </div>
  );
}

export default ExpensesPage;
