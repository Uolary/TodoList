import React from 'react';

function TodoItem({id, title, completed}) {
  return (
    <li className="todo">
      <label>
        <input 
          type="checkbox"
          defaultChecked={false}
        />
        <span>{title}</span>
        <i
          className="material-icons red-text"
        >
          Delete
        </i>
      </label>
    </li>
  )
}

export default TodoItem;