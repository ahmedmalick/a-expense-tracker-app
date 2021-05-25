import { useContext } from 'react'
import TransactionItem from '../TransactionItem/TransactionItem'
import TransactionContext from '../../Context&Reducer/TransactionContext'
import styles from './TransactionList.module.css'

const TransactionList = () => {

    const { Transactions } = useContext(TransactionContext)

    return (
        <div className={styles.container}>
            {Transactions.map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
            )
            )}
        </div>
    )
}

export default TransactionList
