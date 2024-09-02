// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [createTask, setCreateTask] = useState(false)

  useEffect(() => {
    
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    setCreateTask(false)
  };

  const editTask = (taskToEdit) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, ...taskToEdit } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    alert('Do you really want to delete this task?')
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="App bg-gray-50 min-h-screen">
      <div className='container mx-auto'>
        
        <h1 className='text-2xl text-gray-700 py-3 font-semibold text-center'>Task Manager</h1>
        
        {createTask ? <div className='w-3/5 mx-auto p-5 mb-5'><TaskForm onSave={addTask} /></div> : null}
       
       <div className='w-3/5 mx-auto bg-white p-5'>
        <div className='flex justify-between mt-10 mb-5 items-center'>
          <div>
          {createTask ? null : <button className='font-semibold text-blue-500 text-base' onClick={()=>setCreateTask(true)}>+ Create Task</button>}
          </div>
          
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onEdit={editTask} onDelete={deleteTask} />
        </div>
        
      </div>
    </div>
  );
};

export default App;
