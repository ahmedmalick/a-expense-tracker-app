import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

export const Balance = () => {

    const { transactions } = useContext(TransactionContext);

    const transactionAmounts = transactions.map(transaction => transaction.amount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    return (
        <div className="bal-container">
            <h3>Balance</h3>
            <h3 id="balance">${balance}</h3>
        </div>
    )
}
