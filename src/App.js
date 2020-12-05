import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './context/TransactionContext';
import './App.css';

function App() {
  return (
      <div className="container">
        <TransactionProvider>
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </TransactionProvider>
      </div>
  );
}

export default App;
