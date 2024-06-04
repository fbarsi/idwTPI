import React, { useState } from 'react';

const DateInput = ({placeholderText}) => {
  const [inputType, setInputType] = useState('text');
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType(value ? 'date' : 'text');
  };

  return (
    <input
      className="date-input"
      type={inputType}
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholderText}
    />
  );
};

export default DateInput;
