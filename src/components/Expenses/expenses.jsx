import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server
      await axios.post('http://localhost:3001/submitExpense', { description, amount });

      // Clear form fields after submission
      setDescription('');
      setAmount('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    Account: <input value={Account} placeholder='Account Name' onChange={(e)=>setAccountName(e.target.value)}/>
    <br></br>
    Date: <input value={Date} type="date" placeholder='Date of Transaction' onChange={(e)=>setDate(e.target.value)}/>
    <br></br>
    Status: <input value={Status} placeholder='Status' onChange={(e)=>setStatus(e.target.value)}/>
    <br></br>
    Payee: <input value={Payee} placeholder='Payee' onChange={(e)=>setPayee(e.target.value)}/>
    <br></br>
    Category: <input value={Category} placeholder='Catergory' onChange={(e)=>setCategory(e.target.value)}/>
    <br></br>
    Amount: <input value={Amount} placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <br></br>
    <button>Add Expense</button>
  </form>
  );
};

export default ExpenseForm;