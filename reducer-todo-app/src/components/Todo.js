import React from 'react';


const Todo = (props) => {

    const { item, id } = props.todo;
    return (
        <div>
            <p>{item}</p>
            <p>{id}</p>
        </div>
    )
}

export default Todo;