import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//state - 1
const defaultState = [];

//reducer - 1
const expenseReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expenses ];
		case 'REMOVE_EXPENSE':
			return state.filter((id) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else return expense;
			});
		default:
			return state;
	}
};

//state - 2
const filterReducerState = {
	text: 'rent',
	sortBy: 'amt',
	startDate: undefined,
	endDate: undefined
};

//reducer -2
const filterReducer = (state = filterReducerState, action) => {
	switch (action.type) {
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.payload
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.payload
			};
		default:
			return state;
	}
};



//combined both reducers
const store = createStore(
	combineReducers({
		expense: expenseReducer,
		filters: filterReducer
	})
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amt') {
				return a.amt < b.amt ? 1 : -1;
			}
		});
};

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
	console.log(visibleExpenses);
});


const addExpense = ({ desc, amt, note, createdAt }) => ({
	type: 'ADD_EXPENSE',
	expenses: {
		id: uuid(),
		desc,
		amt,
		note,
		createdAt
	}
});



;

// const demoState = {
// 	expenses: [
// 		{
// 			id: 'ddada',
// 			desc: 'dec rent',
// 			note: 'this is the note',
// 			amt: '3444',
// 			createdAt: 0
// 		}
// 	],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amt',
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// };

const expenseOne = store.dispatch(addExpense({ desc: 'rent', amt: 400, createdAt: 1000, note: 'thi is the first' }));
// console.log(expenseOne.expenses.id);
// store.subscribe(() => console.log(store.getState()));
const expenseTwo = store.dispatch(addExpense({ desc: 'sale', amt: 500, createdAt: -1000, note: 'thi is the second' }));
//const editExpenseOne = store.dispatch(editExpense(expenseTwo.expenses.id, { amt: 1 }));
// /store.dispatch(sortByDate());

//const removeExpenseOne = store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
store.dispatch(setTextFilter('sale'));
//store.dispatch(setStartDate(2000));
//store.dispatch(setEndDate(1));

// const boy = {
// 	name: 'asdasd',
// 	age: 4
// };

// const bigBoy = {
// 	name: 'pappu',
// 	...boy
// };

// console.log({ ...bigBoy });
// store.subscribe(() => console.log(store.getState()));
