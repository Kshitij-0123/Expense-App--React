import ExpenseBars from "./ExpenseBars";
import "./Charts.css"
const ExpenseChart = props => {
    const dataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];
    let totalVal = 0;
    props.expense.map(exp => {
        dataPoints[exp.date.getMonth()].value += exp.amount;
        totalVal += exp.amount;
        return 0;
    });
    let pad = 0;
    if (props.ht === 0) { pad = 0; }
    else { pad = 20; }

    return (
        <div className="expense-chart" style={{ height: `${props.ht}px`, padding: `${pad}px` }}>
            {
                dataPoints.map((dp) => (
                    <ExpenseBars
                        key={dp.label}
                        data={dataPoints}
                        month={dp.label}
                        fillPercent={Math.round((dp.value / totalVal) * 100)}
                    />
                ))
            }
        </div>
    );
}

export default ExpenseChart;