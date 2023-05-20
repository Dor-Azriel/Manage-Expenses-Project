import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  let [title,setTitle] = useState(props.title);

  const clickHandler = ()=>{
    console.log("Clicked!");
    setTitle("changed !");
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}> Click me ! </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
