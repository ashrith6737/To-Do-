import './Assets/CSS/TodoItems.css'

const TodoItems = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-items">
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleComplete(index)} 
          />
          {todo.text}
          <button onClick={() => deleteTodo(index)} className="delete-btn">X</button>
        </div>
      ))}
    </div>
  )
}

export default TodoItems