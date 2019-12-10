import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';

const Todos = () => {

    //reducer hook --> need to import reducer and initialState
    const [todoState, dispatch] = useReducer(reducer, initialState)

    const [newTodo, setNewTodo] = useState('');

    //setup 'handleInputChanges' to watch for changes 'newTodo'
    const handleInputChanges = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h3>Todo component --> add single todo here</h3>
            <form>
                <input
                    type='text'
                    placeholder='Add todo'
                    onChange={handleInputChanges}
                />
                {/* will need to add 'onClick' here to add new todo */}
                <button>Add todo</button>
            </form>
        </div>
    )
}

export default Todos;