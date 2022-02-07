import React from 'react';

export function TextField({ title, inputProps={},...props}) {
  return (
  <div className='flex flex-col'{...props}>
      <label>{title}</label>
      <input {...inputProps} type="text" className='border border-danger'/>

  </div>)
};

