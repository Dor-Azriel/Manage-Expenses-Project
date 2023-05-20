import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"






const ExpensesList = (props)=>{



    // evluate the content of the Expenses and show the write message/data.
  
    if (props.items.length === 0){
        return (<h2 className="expenses-list__fallback">Expenses Not found</h2>)
    }
    
    return (<ul className="expenses-list">
          { props.items.map((item)=>{
        return <ExpenseItem key = {item.id} title ={item.title} amount ={item.amount} date = {item.date}/>
      })}
    </ul>
    )

}

export default ExpensesList;