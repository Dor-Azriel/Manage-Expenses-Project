import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [year,setyear] = useState("");
  //Handle chnge on ExpensesFilter component and genrate ExpenseItem list by filterd by Expense year
  const expenseFilterHandler = (filter)=>{
    console.log("Coming from expenses - "+filter);
    setyear(filter);
  }
  // filter Expenses by year and send it in return to ExpensesList Component.
  const filterdExpenses= props.items.filter(item =>{ if(year) { return item.date.getFullYear() == year; } else return true;});


  return (
    <Card className="expenses">
      <ExpensesFilter onChange={expenseFilterHandler} expensesFilter = {expenseFilterHandler}/>
      <ExpensesChart data = {filterdExpenses}/>
      <ExpensesList items= {filterdExpenses}/>
    </Card>
  );
}


export default Expenses;

