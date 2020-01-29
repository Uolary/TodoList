import React, {useState} from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'First todo',
      completed: false
    },
    {
      id: 2,
      title: 'Last todo',
      completed: true
    }
  ])

  const [todoTitle, setTodoTitle] = useState('')

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
