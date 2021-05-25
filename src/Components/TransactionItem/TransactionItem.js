import { useContext } from 'react'
import { ImBin } from "react-icons/im"
import TransactionContext from '../../Context&Reducer/TransactionContext'
import styles from './TransactionItem.module.css'

const TransactionItem = ({ transaction }) => {

    const { deleteTrans } = useContext(TransactionContext)
    // change text color acc to neg or pos

    return (
        <div className={styles.container}>
            <div className={styles.left_sect}>
                <span>{transaction.name}</span>
                <br />
                <span>${transaction.amount}</span>
            </div>
            <div className={styles.right_sect}>
                <ImBin className={styles.btn} onClick={() => deleteTrans(transaction.id)} />
            </div>
        </div>

    )
}

export default TransactionItem
