import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(TransactionContext);
    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <div className="list">
            <ul>
                <li className={transactionType}>
                    {transaction.description}
                    <span>{sign}${Math.abs(transaction.amount)}</span>
                    <button className="delete-btn"
                        onClick={() => delTransaction(transaction.id)} >
                        X
                    </button>
                </li>
            </ul>
        </div>
    )
}