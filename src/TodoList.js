import React, { useState, useEffect } from 'react';
import TodoItems from './TodoItems';
import './index.css';

const TodoList = () => {
const [tasks, setTasks] = useState([]);
  
const addItem = (item) => {
    setTasks([...tasks, item]);
  };

const removeItem = (itemToBeDeleted) => {
    setTasks(tasks.filter((item) => itemToBeDeleted !== item));
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

const AddItemForm = ({ addItem }) => {
    const [item, setItem] = useState('');
  
const handleSubmit = (e) => {
    e.preventDefault();
    if(item === undefined || item === "" || item?.trim() === "") { 
          alert("Can't add empty task")
    } else {
        addItem(item);
        setItem('');
      }
    };
  

    return (
        <div>

          <form onSubmit={handleSubmit}>
            <input className="input-field" placeholder="enter task" value={item} onChange={(e) => setItem(e.target.value)} />
            <button className="button">add</button>
          </form>
        </div>
      );
  }

  return (
      <div className="tasks-block">
          <AddItemForm addItem={addItem} />
          <TodoItems tasks={tasks} removeItem={removeItem}  />
      </div>
  )
}

export default TodoList;