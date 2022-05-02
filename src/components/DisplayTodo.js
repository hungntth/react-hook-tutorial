import React from 'react';

DisplayTodo.propTypes = {

};


function DisplayTodo(props) {
    const todoList = props.todoList;
    const handleDelteTodo = (id) => {
        props.handleDelteTodo(id);
    }

    return (
        <>
            <div>--- Tod List ---</div>
            {todoList.map((item) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDelteTodo(item.id)}>{item.title}</div>
                )
            })}
        </>
    );
}

export default DisplayTodo;