import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';

//imported from the notification component
import {show_notification} from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const dispatch = useDispatch();

    const vote = (id, content) => {
        dispatch(vote_for(id));
        dispatch(show_notification(`you voted for ${content}`, 40))
        //console.log('vote', id);
    }

    //creating the action creator for displaying the notification when you vote for an anecdote
   /* const vote_notification = `you voted for `
    const show_notification = () => {
        dispatch()
    }
    */

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content) }>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AnecdoteList;