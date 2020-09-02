import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.map((transaction) =>
    transaction.amount < 0
      ? (totalExpense += transaction.amount)
      : (totalIncome += transaction.amount)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;

// transaction.amount < 0
//         ? totalExpense + transaction.amount
//         : totalIncome + transaction.amount,
