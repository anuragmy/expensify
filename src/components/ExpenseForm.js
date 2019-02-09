import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import classnames from "classnames";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({
        amount
      }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  onDateChange = createdAt => {
    createdAt ? this.setState(() => ({ createdAt })) : null;
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocused: focused }));
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { description, amount } = this.state;
    if (!(description && amount))
      this.setState(() => ({ error: "This cannot be empty" }));
    else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      console.log("submitted");
    }
  };

  componentDidMount() {
    const now = moment();
    console.log(now.format("Do MMM, YYYY - hh:mm:ss a"));
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="danger">Please fill in amount and description</div>
        )}
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="discription"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className={this.state.error ? "invalid-form" : ""}
          />
          <input
            type="text"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="add amount ($)"
            autoFocus
          />
          <SingleDatePicker
            date={this.state.createdAt}
            focused={this.state.calanderFocused}
            onDateChange={this.onDateChange}
            numberOfMonths={1}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add A note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}
