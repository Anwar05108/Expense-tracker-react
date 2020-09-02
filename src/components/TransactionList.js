import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;

// = () => {
//   const context = useContext(GlobalContext);
//   console.log(context);
// };
