import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(TransactionContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            amount: +amount
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3 className="add-trans">add transaction</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required />
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required />
                <br />
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}