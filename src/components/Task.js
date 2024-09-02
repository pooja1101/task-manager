import React, { useState } from 'react';
import TaskForm from './TaskForm';

const Task = ({ task, onToggleComplete, onEdit, onDelete }) => {
    const [editingTask, setEditingTask] = useState(null);
    const handleEdit = (task) => {
        
        setEditingTask(task);
        console.log(editingTask)
      };
    
      const handleSave = (updatedTask) => {
        onEdit(updatedTask);
        setEditingTask(null);
      };
  return (
    <>
        <tr className={`task ${task.completed ? 'completed' : ''} , odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`} >
            <td class="px-6 py-4 w-1/3">
                <h3>{task.id}</h3>
            </td>
            <td class="px-6 py-4 w-1/3">
                <h3>{task.title}</h3>
            </td>
            <td class="px-6 py-4 w-1/2">
                <p>{task.description}</p>
            </td>
            
            <td class="px-6 py-4">
            <div className='flex space-x-2 text-blue-500 font-semibold underline'>
                <button onClick={() => onToggleComplete(task.id)}>
                {task.completed ? 'Incomplete' : 'Complete'}
                </button>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
            </td>
            
            
        </tr>
        {editingTask && (
            <tr className='border-b pb-5'>
                <td colSpan={3} className='pb-5'>
                    
                <TaskForm taskToEdit={editingTask} onSave={handleSave} />
            
                </td>
            </tr>
        )}
        
      

    </>
    
    
  );
};

export default Task;
