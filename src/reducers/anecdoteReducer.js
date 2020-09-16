import anecdoteService from '../services/anecdotes';

const sortAnecs = (anecdotes) => {
	return anecdotes.sort((a, b) => b.votes - a.votes);
}

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'INIT_ANECDOTES':
			return action.data
		case 'NEW_ANECDOTE':
			return [...state, action.data];
		case 'VOTE':
			//when a vote is made state changes(votes increase) and  the blogs are sorted
			/*
			sortAnecs(state);
			const id = action.data.id;
			const anec_to_add_vote = state.find(anec => anec.id === id);
			//console.log("this the anec to vote for", anec_to_add_vote)
			const voted_anec = {
				...anec_to_add_vote, votes: anec_to_add_vote.votes + 1
			}
			return state.map(anec => anec.id !== id ? anec : voted_anec);
			*/
			const id = action.data.id;
			const anecToSort = state.map(anec => anec.id !== id ? anec : action.data);
			return sortAnecs(anecToSort);
		default:
			return state;
	}
}

export const vote_for = (id) => {

	return async dispatch => {
		const anecdotes = await anecdoteService.getAll();
		const anecToVote = anecdotes.find(el => el.id === id);
		const votedAnec = { ...anecToVote, votes: anecToVote.votes + 1 }
		const updatedAnec = await anecdoteService.updateAnec(id, votedAnec);

		dispatch({
			type: 'VOTE',
			data: updatedAnec
		})
	}

	/*return {
		type: 'VOTE',
		data: { id }
	}
	*/

}

export const newAnec = (content) => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content);
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote
		});
	}
}

export const initializeState = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll();
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export default reducer;

//functions that create actions are action creators eg vote_for votes for the anecdote

/*const anecdotesAtStart = [
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
*/