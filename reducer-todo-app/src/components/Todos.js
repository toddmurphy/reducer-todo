import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';
import Todo from './Todo';

const Todos = () => {

    //reducer hook --> need to import reducer and initialState
    const [todoState, dispatch] = useReducer(reducer, initialState)
    console.log(todoState, dispatch)



    const [newTodo, setNewTodo] = useState('');

    //setup 'handleInputChanges' to watch for changes 'newTodo'
    const handleInputChanges = (event) => {
        setNewTodo(event.target.value);
    }


    //set 'handleSubmit' on form to add new todo
    const handleSubmit = (event) => {
        event.preventDefault();
        //add a dispatch here to add tod
        dispatch({type: 'ADD_TODO', payload: newTodo})
        setNewTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add todo'
                    onChange={handleInputChanges}
                    value={newTodo}
                />
                <button>Add todo</button>
            </form>

            <button>Clear todos</button>

            {todoState.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default Todos;