import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import { createStore, combineReducers } from 'redux';

//combined both reducers
export default () => {
	const store = createStore(
		combineReducers({
			expense: expenseReducer,
			filters: filterReducer
		})
	);
	return store;
};
