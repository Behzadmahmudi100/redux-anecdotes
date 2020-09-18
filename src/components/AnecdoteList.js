import React from 'react';
import { connect } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';

//imported from the notification component
import { show_notification } from '../reducers/notificationReducer';
import anecdotes from '../services/anecdotes';

const AnecdoteList = (props) => {

    const vote = (id, content) => {
        ///dispatch(vote_for(id));
        //dispatch(show_notification(`you voted for ${content}`, 5));
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
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
    )
}

const mapStateToProps = (state) => {
    console.log(state);

    if (state.filter === "") {
        return {
            anecdotes: state.anecdotes,
        }
    }
    return {
        anecdotes: state.anecdotes.filter((anecdote) => { return anecdote.content.includes(state.filter) })
    }
}

const ConnectedAnecdotes = connect(
    mapStateToProps
)(AnecdoteList);

export default ConnectedAnecdotes;