import React, { useState } from "react";
import "./ExpenseFilter.css"


const ExpenseFilter = (props) => {

    const [years, setYears] = useState([]);
    props.yearList.forEach((c) => {
        if (!years.includes(c)) {
            setYears(() => { return ([...years, c].sort((a, b) => { return b - a })) });
        }
    });

    const yearChangeHandler = (e) => {
        props.onFilter(e.target.value)
    }


    return (
        <div className="filter-div">
            <label>Filter By Year</label>
            <select
                value={props.selected}
                onChange={yearChangeHandler}>
                <option key="All" value="All">All</option>
                {
                    years.map((exp) => (
                        <option key={exp} value={exp}>{exp}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default ExpenseFilter;