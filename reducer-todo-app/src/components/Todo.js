import React from 'react';
import './Todo.css'


const Todo = (props) => {

    const { todo, id } = props.todo;
    return (
        <div>
            <p className={props.todo.completed ? 'complete' : '' }
                onClick={(event)=> {
                event.preventDefault()
                props.handleComplete(id)
            }}>{todo}</p>
        </div>
    )
}

export default Todo;