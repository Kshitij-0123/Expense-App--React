import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="Expense-div">
            <ExpenseDate date={props.date} />
            <div className="Expense-div__Expense-Reason">
                <h1>{props.title}</h1>
            </div>
            <div className="Expense-div__Amount">
                <span>$</span><span>{props.amount}</span>
            </div>
        </div>
    );
}

export default ExpenseItem;