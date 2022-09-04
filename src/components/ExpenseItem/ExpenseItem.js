import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const [title, newTitle] = useState(props.title);
    const clickHandler = () =>{
        newTitle("updated");
    }
    return (
        <div className="Expense-div">
            <ExpenseDate date={props.date} />
            <div className="Expense-div__Expense-Reason">
                <h1>{title}</h1>
            </div>
            <div className="Expense-div__Amount">
                <span>$</span><span>{props.amount}</span>
            </div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default ExpenseItem;