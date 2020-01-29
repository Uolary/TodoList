import React, {useState} from 'react';

function TodoItem({id, title, completed}) {
  const [checked, setChecked] = useState(completed)

  const cls = ['todo']

  if (checked) {
    cls.push('complited')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input 
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
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