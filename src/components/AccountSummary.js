import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export const AccountSummary = () => {

    const { transactions } = useContext(TransactionContext);
    const transactionAmounts = transactions.map(transaction => transaction.amount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
            <h3>Income</h3>
            <h3 className="green">${income}</h3>
        </div>
        <div>
            <h3>Expense</h3> 
            <h3 className="red">${expense}</h3>
        </div>            
    </div>
    )
}
