import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      ]
    }
  }

  render() {
    return (
      <div className="list">
        <h1>Todo list</h1>
        <div className="input-field">
          <input type="text" />
          <label>
            Todo name
          </label>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App;
