import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ desc: 'water bill', amt: 200, note: 'please pay it' }));
store.dispatch(addExpense({ desc: 'Gas bill', amt: 100, note: 'please pay it' }));
store.dispatch(addExpense({ desc: 'elecricity bill', amt: 200, note: 'please pay it' }));
store.dispatch(addExpense({ desc: 'home bill', amt: 200, note: 'please pay it' }));
store.dispatch(setTextFilter('water'));
//store.subscribe(() => console.log(store.getState()));

const state = store.getState();
// console.log(state.filters);
const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('app')
);
