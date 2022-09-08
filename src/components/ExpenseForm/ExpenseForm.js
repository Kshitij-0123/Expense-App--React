import React, { useState } from "react"
import Card from "../UI/Card"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    // const [title, updateTitle] = useState('');
    // const [amount, updateAmount] = useState('');
    // const [date, updateDate] = useState('');

    const [userInput, setUserInput] = useState({ title: "", amount: "", date: "" })

    const titleChangeHandler = (event) => {
        // updateTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        setUserInput((userInput) => {
            return {
                ...userInput,
                title: event.target.value
            }
        })
    }
    const amountChangeHandler = (event) => {
        // updateAmount(event.target.value);
        setUserInput((userInput) => {
            return {
                ...userInput,
                amount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        // updateDate(event.target.value);
        setUserInput((userInput) => {
            return {
                ...userInput,
                date: event.target.value
            }
        })
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newExpenseData = {
            title: userInput['title'],
            amount: userInput['amount'],
            date: new Date(userInput['date']),
            id: `e${(Math.random() * 100)}`
        }
        props.onFormSubmit(newExpenseData)
        setUserInput({
            title: "",
            amount: "",
            date: "",
        })
    };

    return (
        <Card className="form-div">
            <form className="form-tag" onSubmit={formSubmitHandler}>
                <div className="form">
                    <div>
                        <input type='date' value={userInput['date']} className="form-input__date" onChange={dateChangeHandler} />
                        <input type='number' value={userInput['amount']} className="form-input__amount" onChange={amountChangeHandler} />
                    </div>
                    <input type='text' value={userInput['title']} className="form-input__reason" onChange={titleChangeHandler} />
                </div>
                <button type="submit" className="form__submit third">ADD NEW EXPENSE</button>
            </form>
        </Card>
    );
}

export default ExpenseForm;