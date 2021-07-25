import React, {useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h1>{props.title}</h1> 
      </div>
      <div className="expense-item__price">${props.amount}</div>
      
    </Card>
    </li>
  );
}
export default ExpenseItem;
