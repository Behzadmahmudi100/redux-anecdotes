import React from 'react';
import { connect } from 'react-redux';
import { vote_for } from '../reducers/anecdoteReducer';
import { show_notification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {

    const vote = (id, content) => {
        props.vote_for(id);
        props.show_notification(`you voted for ${content}`, 5);
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
        anecdotes: state.anecdotes.filter((anecdote) => { return anecdote.content.toLowerCase().includes(state.filter) })
    }
}

const mapDispatchToProps = {
    vote_for,
    show_notification
} 

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdotes;