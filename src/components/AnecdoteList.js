import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state);
    const dispatch = useDispatch();

    const vote = (id) => {
        dispatch(vote_for(id));
        //console.log('vote', id);
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AnecdoteList;