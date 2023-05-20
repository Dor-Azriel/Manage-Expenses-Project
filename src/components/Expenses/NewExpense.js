import React,{useState} from "react";
import './NewExpence.css';
import ExpenseForm from "./ExpenceForm";
import AddNewExpenseButton from "./AddNewExpenseButton";
const NewExpence = (props)=>{

    const saveNewExpenceHandler = expence =>{
        const newExpence = {
           ...expence
        };
        //console.log("New expence");
        //console.log(newExpence);
        props.newExpenceAdd(newExpence)
    }

    return <div className="new-expense"> 
        <AddNewExpenseButton newExpenceAdd={saveNewExpenceHandler} />
    </div>

}

//<ExpenseForm onSaveNewExpence = {saveNewExpenceHandler}/>

export default NewExpence;