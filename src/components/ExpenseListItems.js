import React from "react";
import { setTextFilter } from "../actions/filters";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { editExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItems = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount).format("$0,0.00")}-
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default connect()(ExpenseListItems);
