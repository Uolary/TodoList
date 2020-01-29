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
      </label>
    </li>
  )
}

export default TodoItem;