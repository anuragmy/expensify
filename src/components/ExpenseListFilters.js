import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({
      calenderFocused
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }}
        />
        <select
          onChange={e => {
            if (e.target.value === "amount")
              this.props.dispatch(sortByAmount());
            else this.props.dispatch(sortByDate());
          }}
        >
          <option value="date">date</option>
          <option value="amount">amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.calenderFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
