import { useState, useRef, useEffect } from 'react';
import './CSS/Todo.css';
import TodoItems from '../TodoItems';

let count = 0;

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos, { no: count++, text: inputRef.current.value, completed: false }]);
        inputRef.current.value = "";
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder="Add Your Task" className='todo-input' />
                <div onClick={add} className="todo-add-btn">ADD</div>
            </div>
            <TodoItems todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todo;