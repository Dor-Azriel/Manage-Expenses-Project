import React,{useState} from "react";
import "./ExpenceForm.css"
import ExpenseForm from "./ExpenceForm"; 
import NewExpence from "./NewExpense";



const AddNewExpenseButton = (props)=>{

    const [clicked,setClicked] = useState(false);
    const newExpenceAddedHandler = (expense)=>{
        const NewExpense = {...expense};
        props.newExpenceAdd(NewExpense)
        setClicked(false);
    }

    const clickHandler=()=>{
        setClicked(true);
        //console.log("clicked")
        //return (<ExpenseForm onSaveNewExpence ={newExpenceAddedHandler} />)
    }
    
    const clickCancelHandler=()=>{
        setClicked(false);
        //console.log("clicked")
        //return (<ExpenseForm onSaveNewExpence ={newExpenceAddedHandler} />)
    }
    if (clicked){
        return (<ExpenseForm onSaveNewExpence ={newExpenceAddedHandler} onCancelClick={clickCancelHandler} />)
    }
    return (<div className="new-expense__new">
                <button type="button" onClick={clickHandler}>Add New Expense</button>
            </div>)
};

export default AddNewExpenseButton;