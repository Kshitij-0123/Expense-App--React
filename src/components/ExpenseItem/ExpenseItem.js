import "./ExpenseItem.css"

let date = new Date(2021, 2, 30);
let expnseName = "anime"
let amt = 297;
const ExpenseItem = () => {
    return (
        <div className="Expense-div">
            <div className="Expense-div__Date">
                <h1>{date.toISOString()}</h1>
            </div>
            <div className="Expense-div__Expense-Reason">
                <h1>{expnseName}</h1>
            </div>
            <div className="Expense-div__Amount">
                {amt}
            </div>
        </div>
    );
}

export default ExpenseItem;