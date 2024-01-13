import React, { useState } from 'react';
import axios from 'axios';

const IncomeForm = () => {
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server
      await axios.post('/api/income', { account,date, source, category, amount });

      // Clear form fields after submission
      setAccount('');
      setDate('');
      setSource('');
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
    Source: <input value={source} placeholder='source' onChange={(e)=>setSource(e.target.value)}/>
    <br></br>
    Category: <input value={category} placeholder='Category' onChange={(e)=>setCategory(e.target.value)}/>
    <br></br>
    Amount: <input value={amount} placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <br></br>
    <button>Add Income </button>
  </form>
  );
};

export default IncomeForm;