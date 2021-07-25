import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={FilteredYear} onChangeFilter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
        
      </Card>
    </div>
  );
};
export default Expenses;
