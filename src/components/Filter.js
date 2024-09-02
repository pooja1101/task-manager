import React from 'react';
import Button from './Button';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='flex space-x-3  justify-end'>
        <Button onClick={() => setFilter('all')} text='All Tasks' isAll/>
        <Button onClick={() => setFilter('completed')} text='Completed Tasks' isCompleted/>
        <Button onClick={() => setFilter('active')} text='Active Tasks' isActive/>
      
      
    </div>
  );
};

export default Filter;
