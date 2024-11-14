import React, { useState } from 'react';

const Another: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = () => {
    setDisplayValue(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <label htmlFor="input">Input:</label><br/>
        <input type="text" id="input" value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>Mostrar Valor</button><br/><br/>
        <label htmlFor="output">Output:</label><br/>
        <input type="text" id="output" value={displayValue} readOnly/>
  </div>
  );
};

export default Another;
