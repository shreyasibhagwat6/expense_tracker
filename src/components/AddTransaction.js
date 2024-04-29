import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction () {
    const[text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label forhtml="text">Text</label>
                    <input type='text' value={text} onChange={handleTextChange} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label forhtml="amount">Amount <br /> 
                    (negative-expense, positive-income)
                    </label>
                    <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;