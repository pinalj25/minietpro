import React, { useState,useEffect } from "react";
import "./Adt.css";

export default function AddTransaction({ addTransaction, isVisible, onClose , editTransaction, transactionToEdit }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  
  useEffect(() => {
    
    if (transactionToEdit) {
      setDate(transactionToEdit.date);
      setCategory(transactionToEdit.category);
      setTransactionType(transactionToEdit.transactionType);
      setAmount(transactionToEdit.amount.toString());
      setDetails(transactionToEdit.details);
    }
  }, [transactionToEdit]);

  const handleAddTransaction = () => {
  
    if (!date || !category || !amount || isNaN(parseFloat(amount) || details)) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (transactionToEdit) {
      
        editTransaction({
          index: transactionToEdit.index, 
          data: { date, category, transactionType, amount: parsedAmount, details },
        });
      } else {
      
        addTransaction({ date, category, transactionType, amount: parsedAmount, details });
      }
    

    
    setDate("");
    setCategory("");
    setTransactionType("Income");
    setAmount("");
    setDetails("");

 
    onClose();
  };

  const handleClose = () => {
    // Close the modal
    onClose();
  };

  return isVisible ? (
    <div className="modal">
      <div className="hide">
         <h2>{transactionToEdit ? 'Edit Transaction' : 'Add Transaction'}</h2>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Details:</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button onClick={() => handleAddTransaction()}>
  {transactionToEdit ? 'Save Changes' : 'Add Transaction'}
</button>
        
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
}
