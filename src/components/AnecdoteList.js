import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';

//imported from the notification component
import {  show_and_remove_notification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const dispatch = useDispatch();

    const vote = (id, content) => {
        dispatch(vote_for(id));
        dispatch(show_and_remove_notification(`you voted for ${content}`, 5))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AnecdoteList;