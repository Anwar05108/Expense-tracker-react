import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  let total = 0;

  transactions.map((transaction) => (total = total + transaction.amount));
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balance;
