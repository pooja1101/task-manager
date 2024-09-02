import React, { useEffect, useState } from 'react';
import Button from './Button';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || '');
      setDescription(taskToEdit.description || '');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSave({ title, description, id: taskToEdit?.id });
      setTitle('');
      setDescription('');
      alert("Task Added successfully!!");
    } else {
      alert('Title is required');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-4/5 shadow-xl p-8 rounded-md mx-auto bg-white'>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} className='w-full border-gray-300 px-4 py-2 border rounded-md mb-5'
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} className='w-full border-gray-300 px-4 py-2 border rounded-md mb-5'
      ></textarea>
      {/* <button type="submit">Save Task</button> */}
      <Button type="submit" text='Save Task'/>
    </form>
  );
};

export default TaskForm;
