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
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Expense</button>
    </form>
  );
};

export default ExpenseForm;