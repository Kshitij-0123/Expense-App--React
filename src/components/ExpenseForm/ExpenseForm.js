import React, { useState } from "react"
import Card from "../UI/Card"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({ title: "", amount: "", date: "" })
    const titleChangeHandler = (event) => {
        setUserInput((userInput) => {
            return {
                ...userInput,
                title: event.target.value
            }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((userInput) => {
            return {
                ...userInput,
                amount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
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
    const [formState, setFormState] = useState(false);
    const changeFormState = () => {
        setFormState(!formState);
    }
    const renderButton = (
        <button type="" value={"show_expense_form"} className="form-show-button third" onClick={changeFormState} > ADD NEW EXPENSE</button>
    )
    const renderForm = (
        <form className="form-tag" onSubmit={formSubmitHandler}>
            <div className="form">
                <div>
                    <input type='date' value={userInput['date']} className="form-input__date" onChange={dateChangeHandler} />
                    <input type='number' value={userInput['amount']} className="form-input__amount" onChange={amountChangeHandler} />
                </div>
                <input type='text' value={userInput['title']} className="form-input__reason" onChange={titleChangeHandler} />
            </div>
            <button type="submit" className="form__button third">SUBMIT</button>
            <button type="reset" onClick={changeFormState} className="form__button third">CANCEL</button>
        </form>)

    return (
        <Card className="form-div">
            {
                (formState === false) ? renderButton : renderForm
            }
        </Card>
    );
}

export default ExpenseForm;