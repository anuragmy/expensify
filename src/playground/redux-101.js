import { createStore } from 'redux';

const increment = ({ incrementBy = 1 }) => ({
	type: 'INCREMENT',
	incrementBy
});

const store = createStore((state = { count: 10 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - incrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			};
		default:
			return state;
	}
});

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(increment({ incrementBy: 30 }));

// store.dispatch({
// 	type: 'DECREMENT'
// });

// store.dispatch({
// 	type: 'RESET'
// });

// store.dispatch({
// 	type: 'SET',
// 	count: 101
// });

// const book = {
// 	name: 'pj',
// 	genere: 'horror'
// };

// const { name: firstname, genere, date: date = '1990' } = book;
// console.log(firstname, genere, date);

const add = ({ a, b }) => a + b;
console.log(add({ a: 1, b: 2 }));
