import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskCritical, setTaskCritical] = useState(false); // State for critical checkbox
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: taskCompleted,
      critical: taskCritical // Assign critical state from checkbox
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setTaskCompleted(false);
    setTaskCritical(false); // Reset critical state after adding task
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleToggleTaskCritical = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, critical: !task.critical } : task
    ));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed); // Show all non-completed tasks
      case 'critical':
        return tasks.filter(task => task.critical);
      default:
        return tasks;
    }
  };

  const getSortedTasks = (tasks) => {
    return [...tasks].sort((a, b) => {
      if (sortOrder === 'asc') return a.text.localeCompare(b.text);
      return b.text.localeCompare(a.text);
    });
  };

  const filteredTasks = getFilteredTasks();
  const sortedTasks = getSortedTasks(filteredTasks);

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <label>
          <input
            type="checkbox"
            checked={taskCompleted}
            onChange={(e) => setTaskCompleted(e.target.checked)}
          />
          Completed
        </label>
        <label>
          <input
            type="checkbox"
            checked={taskCritical}
            onChange={(e) => setTaskCritical(e.target.checked)}
          />
          Critical
        </label>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="filters">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
        <button onClick={() => handleFilterChange('pending')}>Pending</button>
        <button onClick={() => handleFilterChange('critical')}>Critical</button>
        <button onClick={() => handleSortOrderChange('asc')}>Sort Asc</button>
        <button onClick={() => handleSortOrderChange('desc')}>Sort Desc</button>
      </div>
      <ul>
        {sortedTasks.map(task => (
          <li key={task.id} className={`${task.completed ? 'completed' : ''} ${task.critical ? 'critical' : ''}`}>
            <span onClick={() => handleToggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            {!task.completed && (
              <>
                <button className="complete-btn" onClick={() => handleToggleTaskCompletion(task.id)}>
                  {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
                </button>
                <button className="critical-btn" onClick={() => handleToggleTaskCritical(task.id)}>
                  {task.critical ? 'Unmark as Critical' : 'Mark as Critical'}
                </button>
              </>
            )}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  taskInput: PropTypes.string,
  taskCompleted: PropTypes.bool,
  taskCritical: PropTypes.bool,
  filter: PropTypes.oneOf(['all', 'completed', 'pending', 'critical']),
  sortOrder: PropTypes.oneOf(['asc', 'desc']),
};

export default ToDoList;
