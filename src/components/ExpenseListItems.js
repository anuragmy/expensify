import React from "react";
import { setTextFilter } from "../actions/filters";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItems = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount}-{createdAt}
      </p>

      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItems);
