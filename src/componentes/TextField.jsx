import React from 'react';

export function TextField({ title, inputProps={},...props}) {
  return (
  <div className='d-flex flex-col'{...props}>
      <label>{title}</label>
      <input {...inputProps} type="text" className=' d-flex border border-danger'/>

  </div>)
};

