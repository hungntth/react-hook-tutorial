import _ from 'lodash';
import { React, useState } from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

Home.propTypes = {

};

function Home(props) {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([
        { id: 1, title: "play game" },
        { id: 2, title: "go sleep" },
        { id: 3, title: "eat" }
    ])
    const handleClickBtn = () => {
        if (!todo) {
            alert("Todo's name is nott empty");
            return;
        }
        let todoItem = {
            id: "4",
            title: todo
        }
        let currentTodoList = _.clone(todoList);
        currentTodoList.push(todoItem)
        setTodoList(currentTodoList)
        setTodo()
    }
    const handleDelteTodo = (id) => {
        let currentTodoList = _.clone(todoList);
        currentTodoList = currentTodoList.filter(item => item.id !== id)
        setTodoList(currentTodoList)

    }
    return (
        <div>
            <AddTodo
                todo={todo}
                handleClickBtn={handleClickBtn}
                setTodo={setTodo}
            />
            <DisplayTodo
                todoList={todoList}
                handleDelteTodo={handleDelteTodo}
            />

        </div>
    );
}

export default Home;