import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpence from './components/Expenses/NewExpense';
//import ExpensesFilter from './components/Expenses/ExpensesFilter';


const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_DATA);


  const newExpenceAddedHandler = expence =>{
    const newExpence ={
      ...expence, id:'e'+Math.random()
    };
    setExpenses(prev => {return [newExpence,...prev]});
    
    console.log("Data came from APP Component");
    console.log(newExpence);
  }

  return (
    <div>
      <NewExpence newExpenceAdd ={newExpenceAddedHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
