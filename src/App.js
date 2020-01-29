import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    const row = localStorage.getItem('todos') || []

    setTodos(JSON.parse(row))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('')
    }
  }

  return (
    <div className="list">
      <h1>Todo list</h1>
      <div className="input-field">
        <input 
          type="text" 
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>
          Todo name
        </label>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App;
