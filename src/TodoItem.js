import React from 'react';
import './index.css';

const TodoItem = ({ tasks, removeItem }) => {
  return (
    <div className="task-list">
      <ul style={{listStyle: 'none'}}>
        {tasks.map((item) => (
          <li className="list_todo">
          <div key={item} item={item} className="one-task"
       onClick={() => removeItem(item)}>
         {item}
    </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
