import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { initializeState } from './reducers/anecdoteReducer';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeState())
	}, [dispatch]);

	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification />
			<Filter />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	);
}

export default App;