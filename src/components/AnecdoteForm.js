import React from 'react';
import { newAnec } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';
import anecService from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const addAnec = async (event) => {
        event.preventDefault();

        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";

        const newAnecdote = await anecService.createNew(content);
        dispatch(newAnec(newAnecdote));
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnec}>
                <input name="anecdote" />
                <button type='submit' > create </button>
            </form>
        </div>
    );
}

export default AnecdoteForm;