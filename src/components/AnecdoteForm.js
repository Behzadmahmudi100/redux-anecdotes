import React from 'react';
import { newAnec } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {

    const addAnec = async (event) => {
        event.preventDefault();

        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";

        props.newAnec(content);
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

export default connect(
    null,
    { newAnec }
)(AnecdoteForm);