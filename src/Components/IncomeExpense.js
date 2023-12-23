
import React, { useState, useEffect } from "react";
import './Ie.css';
export default function IncomeExpense({ transactions, updateIncome, updateExpense }) {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    
    if (Array.isArray(transactions)) {
      
      const totalIncome = transactions
        .filter((transaction) => transaction?.transactionType === "Income")
        .reduce((sum, transaction) => sum + (transaction?.amount || 0), 0);

      const totalExpense = transactions
        .filter((transaction) => transaction?.transactionType === "Expense")
        .reduce((sum, transaction) => sum + (transaction?.amount || 0), 0);

      setIncome(totalIncome);
      setExpense(totalExpense);
    } else {
     
      setIncome(0);
      setExpense(0);
    }
  }, [transactions, updateIncome, updateExpense]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{expense.toFixed(2)}</p>
      </div>
    </div>
  );
}
