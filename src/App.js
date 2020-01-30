import React, {useState, useEffect, useReducer} from 'react';
import TodoList from './TodoList';
import {Context} from './contex';
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = event => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('')
    }
  }

  // const removeTodo = id => {
  //   console.log('remove')
  //   setTodos(todos.filter(todo => {
  //     return todo.id !== id
  //   }))
  // }

  // const toggleTodo = id => {
  //   console.log('toggle')
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   }))
  // }

  return (
    <Context.Provider value={{
      dispatch
    }}>
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
          <TodoList todos={state} />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App;
