import React, { useState } from "react";
import "./CSS Reset.css"
import "./App.css"
import Card from "./components/UI/Card";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

const Dummy = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy)
  const formAddNew = (expense) => {
    setExpenses((prevState) => {
      return ([expense, ...prevState])
    })
  }

  return (
    <Card className="Main-Card">
      <ExpenseForm onFormSubmit={formAddNew}></ExpenseForm>
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </Card>
  );
}

export default App;
