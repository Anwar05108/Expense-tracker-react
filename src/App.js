import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddNewTransaction,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
