import React from 'react';
import classNames from 'classnames';

const Button = ({ text, isActive, isAll, isCompleted, ...props }) => {
    const componentClass = classNames('bg-blue-500 text-white px-5 py-2 text-sm rounded-md', {
        'bg-transparent border border-orange-500 text-orange-500': isActive,
        'bg-transparent border border-blue-500 text-blue-500 ': isAll,
        'bg-transparent border border-green-500 text-green-500 ': isCompleted
      });
  return (
    <div>
      <button {...props} className={componentClass}>{text}</button>
      
    </div>
  );
};

export default Button;
