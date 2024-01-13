import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [payee, setPayee] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server
      await axios.post('/api/expenses', { account,date, status, payee, category, amount });

      // Clear form fields after submission
      setAccount('');
      setDate('');
      setStatus('');
      setPayee('');
      setCategory('');
      setAmount('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    Account: <input value={account} placeholder='Account' onChange={(e)=>setAccount(e.target.value)}/>
    <br></br>
    Date: <input value={date} type="date" placeholder='Date of Transaction' onChange={(e)=>setDate(e.target.value)}/>
    <br></br>
    Status: <input value={status} placeholder='Status' onChange={(e)=>setStatus(e.target.value)}/>
    <br></br>
    Payee: <input value={payee} placeholder='Payee' onChange={(e)=>setPayee(e.target.value)}/>
    <br></br>
    Category: <input value={category} placeholder='Category' onChange={(e)=>setCategory(e.target.value)}/>
    <br></br>
    Amount: <input value={amount} placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <br></br>
    <button>Add Expense</button>
  </form>
  );
};

export default ExpenseForm;