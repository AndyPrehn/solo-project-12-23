import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ExpensesList() {

    // const dispatch = useDispatch();
    // const StatsList = useSelector(store => store.statsList);

    // const [sortOrder, setSortOrder] = useState('asc');
    // const [sortedColumn, setSortedColumn] = useState('id');

    const columns = [
        { id: 'account', label: 'Account' },
        { id: 'date', label: 'Date' },
        { id: 'status', label: 'Status' },
        { id: 'payee', label: 'Payee' },
        { id: 'category', label: 'Category' },
        { id: 'amount', label: 'Amount' },
    ];

    useEffect(() => {
        dispatch({ type: 'FETCH_STATS' })
    }, []);


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

  </form>
  );
}export default ExpensesList;