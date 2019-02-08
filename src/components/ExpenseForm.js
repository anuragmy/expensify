import React, { Component } from "react";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    amount: "",
    note: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/))
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

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="discription"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            //   if (!e.target.value.match(/^[+-]?([0-9]*[.])?[0-9]+$/))

            // }}
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="add amount ($)"
            autoFocus
          />
          <textarea
            placeholder="Add A note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <input type="submit" value="Add Expense" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}
