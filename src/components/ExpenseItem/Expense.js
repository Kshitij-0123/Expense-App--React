import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
    const [filteredYear, changeFilteredYear] = useState("All");
    const yearsList = props.expenseList.map(a => a.date.getFullYear());
    const years = [];

    yearsList.forEach((c) => {
        if (!years.includes(c)) {
            years.push(c);
        }
    });

    const filterHandle = (selectedYear) => {
        changeFilteredYear(selectedYear);
    }

    const filteredExpenseList = props.expenseList.filter((expense) => {
        if (filteredYear === "All") { return true }
        else { return expense.date.getFullYear().toString() === filteredYear; }
    })

    return (
        <div>
            <ExpenseFilter selected={filteredYear}
                onFilter={filterHandle}
                yearList={years}
                listData={props.expenseList} />
            {filteredExpenseList.map((exp) => (
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            ))}
        </div>
    );
}

export default Expense