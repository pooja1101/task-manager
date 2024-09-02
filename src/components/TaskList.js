import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
   
  return (
    <div>
        

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full bg-white mx-auto mb-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    
                    </tr>
                </thead>
                <tbody>
                {tasks.length !== 0 ? tasks.map((task) => (
                    <Task
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                )) : <tr className='text-gray-800 text-center py-3 mx-auto '><td className='w-full py-3 text-base font-semibold' colSpan={3}>No Task Found</td></tr>}
                </tbody>
            
            </table>
            
        </div>

      
    </div>
  );
};

export default TaskList;
