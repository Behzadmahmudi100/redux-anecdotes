import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';

//imported from the notification component
import { show_notification, hide_notification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const dispatch = useDispatch();
    let anecdotes = useSelector(state => state.anecdotes);
    let filtered = useSelector(state => state.filter);
    anecdotes = anecdotes.filter(el => el.content.toLowerCase().includes(filtered))


    const vote = (id, content) => {
        dispatch(vote_for(id));
        dispatch(show_notification(`you voted for ${content}`));

        setTimeout(() => {
            dispatch(hide_notification());
        }, 1000);
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