import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { TransactionContext } from '../context/TransactionContext';

export const TransactionHistory = () => {

    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <h3>
                Transaction History
        </h3>
            <ul>
                {transactions.map(transaction =>
                    (
                        <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}
