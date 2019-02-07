import uuid from 'uuid';

//Add expense
export const addExpense = ({ desc, amt, note, createdAt }) => ({
	type: 'ADD_EXPENSE',
	expenses: {
		id: uuid(),
		desc,
		amt,
		note,
		createdAt
	}
});

//Edit expense
export const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	id
});

//Edit expense
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
