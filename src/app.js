import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
//dummy data
// store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
// store.dispatch(addExpense({ description: "Gas bill", amount: 50 }));
// store.dispatch(addExpense({ description: "electricity bill", amount: 100 }));
// store.dispatch(addExpense({ description: "phone bill", amount: 6000 }));
// store.dispatch(addExpense({ description: "mobile bill", amount: 630 }));
// store.dispatch(addExpense({ description: "parking bill", amount: 2000 }));
// store.dispatch(addExpense({ description: "wi-fi bill", amount: 3400 }));
//store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log("test");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
