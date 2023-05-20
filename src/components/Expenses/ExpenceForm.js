import "./ExpenceForm.css"
import { useState } from "react";


const ExpenseForm =(props)=>{

    const [enteredData,setEnteredData] = useState({title: "",amount: "", date:""});

    const EnteredTitleHandler = (event)=>{
        const title = event.target.value;
        setEnteredData( prev => { return{...prev,title:title};});
        //console.log(enteredData);

    };
    const EnteredAmountHandler = (event)=>{
        const amount = event.target.value;
        setEnteredData( prev => { return{...prev, amount: amount };});
        //console.log(enteredData);
    }
    const EnteredDateHandler = (event)=>{
        const date = event.target.value;
        setEnteredData( prev => { return{...prev, date:date };});
        //console.log(enteredData);

    }
 
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenceData = {...enteredData,date:new Date(enteredData.date)};
        //console.log(expenceData);
        props.onSaveNewExpence(expenceData);
        setEnteredData({title: "",amount: "", date:""});

    }

    return <form onSubmit={submitHandler} className="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input value= {enteredData.title} onChange= {EnteredTitleHandler} type = "text"></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input value= {enteredData.amount} onChange= {EnteredAmountHandler} type = "number" min = "0.01" step= "0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input value= {enteredData.date} onChange= {EnteredDateHandler} type = "date" min="2023-01-01" max= "2025-01-01" ></input>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick = {props.onCancelClick}>Cancel</button>
            </div>
        </div>
    </form>

}

export default ExpenseForm;