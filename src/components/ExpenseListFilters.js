import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate } from "../actions/filters";
import { sortByAmount } from "../actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
        console.log(e.target.value);
      }}
    />
    <select
      onChange={e => {
        if (e.target.value === "amount") props.dispatch(sortByAmount());
        else props.dispatch(sortByDate());
      }}
    >
      <option value="date">date</option>
      <option value="amount">amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
