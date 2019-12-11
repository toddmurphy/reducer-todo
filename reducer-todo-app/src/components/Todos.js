import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../reducers/todoReducer';
import Todo from './Todo';

const Todos = () => {

    //reducer hook --> need to import reducer and initialState
    const [todoState, dispatch] = useReducer(reducer, initialState)
    console.log(todoState)


    //form state
    const [newTodo, setNewTodo] = useState('');

    //setup 'handleInputChanges' to watch for changes 'newTodo'
    const handleInputChanges = (event) => {
        setNewTodo(event.target.value);
    }


    //setup 'handleSubmit' on form to add new todo
    const handleSubmit = (event) => {
        event.preventDefault();
        //add a dispatch here to add todo
        dispatch({type: 'ADD_TODO', payload: newTodo})
        setNewTodo('');
    }

    //setup 'handleComplete' --> adds line through completed --> changes 'false' to 'true' --> do i need to send this as props to 'Todo'???
    const handleComplete = (id) => {
        dispatch({type: 'COMPLETED_TODO', payload: id})
    }

    
    // setup 'handleClearTodo' to clear completed todo
    const handleClearTodo = (event) => {
        event.preventDefault();
        const filteredTodo = todoState.filter(todo => todo.completed !== true)
        dispatch({type: 'CLEAR_COMPLETED_TODO', payload: filteredTodo})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='todo'
                    type='text'
                    placeholder='Add todo'
                    onChange={handleInputChanges}
                    value={newTodo}
                />
                <button type='submit'>Add todo</button>
            </form>

            {/* add 'onClick={handleClearTodo}' to clear completed todos */}
            <button onClick={handleClearTodo}>Clear todos</button>

            {todoState.map(todo => {
                return <Todo key={todo.id} todo={todo}  handleComplete={handleComplete}/>
            })}
        </div>
    )
}

export default Todos;