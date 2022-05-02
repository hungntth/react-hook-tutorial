import React from 'react';

AddTodo.propTypes = {

};

function AddTodo(props) {
    const { todo, setTodo, handleClickBtn } = props;
    return (
        <div>
            <div>Add new to do</div>
            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)}></input>
            <button type='submit' onClick={() => handleClickBtn()}>submit</button>
        </div>
    );
}

export default AddTodo;