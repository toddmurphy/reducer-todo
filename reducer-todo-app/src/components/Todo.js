import React from 'react';


const Todo = (props) => {

    const { todo, id } = props.todo;
    return (
        <div>
            <p>{todo}</p>
            <p>{id}</p>
        </div>
    )
}

export default Todo;