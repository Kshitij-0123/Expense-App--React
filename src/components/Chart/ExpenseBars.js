import "./Charts.css"

const ExpenseBars = props => {
    return (
        <div className="expense-bar">
            <div className="expense-bar-inner">
                <div className="expense-bar-inner__filled" style={{ height: `${props.fillPercent > 5 ? props.fillPercent + 10 : props.fillPercent}%` }}></div>
            </div>
            <div className="expense-bar__label">{props.month}</div>
        </div>
    );
}
export default ExpenseBars;