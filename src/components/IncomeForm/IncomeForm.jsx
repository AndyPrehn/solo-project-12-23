import React, { useState, useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const IncomeForm = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server
      axios.post("/api/income", { account, date, source, category, amount })
      .then((response) => {
        console.log('Hello', account);
        dispatch({ type: "FETCH_INCOME" });
      })
      .catch((error) => {
        console.log("Hi, its me, Im the problem", error);
        alert("Something went wrong!");
      });

      // Clear form fields after submission
      setAccount("");
      setDate("");
      setSource("");
      setCategory("");
      setAmount("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_INCOME" });
  }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      Account:{" "}
      <input
        value={account}
        placeholder="Account"
        onChange={(e) => setAccount(e.target.value)}
      />
      <br></br>
      Date:{" "}
      <input
        value={date}
        type="date"
        placeholder="Date of Transaction"
        onChange={(e) => setDate(e.target.value)}
      />
      <br></br>
      Source:{" "}
      <input
        value={source}
        placeholder="source"
        onChange={(e) => setSource(e.target.value)}
      />
      <br></br>
      Category:{" "}
      <input
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <br></br>
      Amount:{" "}
      <input
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <button>Add Income </button>
    </form>
  );
};

export default IncomeForm;
