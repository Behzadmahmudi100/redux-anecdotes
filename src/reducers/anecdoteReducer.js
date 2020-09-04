const anecdotesAtStart = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0
	}
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
	console.log('state now: ', state);
	console.log('action', action);

	switch (action.type) {
		case 'NEW_ANECDOTE':
			return [...state, action.data]
		case 'VOTE':
			const id = action.data.id;
			const anec_to_add_vote = state.find(anec => anec.id === id);
			console.log("this the anec to vote for", anec_to_add_vote)
			const voted_anec = {
				...anec_to_add_vote, votes: anec_to_add_vote.votes + 1
			}
			return state.map(anec => anec.id !== id ? anec : voted_anec);
		default:
			return state;
	}
	return state
}

export const vote_for = (id) => {
	return {
		type: 'VOTE',
		data: { id }
	}
}


export default reducer;

//functions that create actions are action creators eg vote_for votes for the anecdote