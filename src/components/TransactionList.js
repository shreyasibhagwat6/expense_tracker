import React, { useCallback, useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

function TransactionList () {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
};

export default TransactionList;