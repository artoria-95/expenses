import React, { useState } from "react";
import "./ExpenseContainer.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from './ExpensesChart';

function ExpenseContainer(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpenseContainer;
