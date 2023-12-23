import React, { useState, useEffect } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    setInput(result);
  }, [result]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const newResult = eval(input).toString();
        setResult(newResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '±') {
      setInput((prevInput) =>
        prevInput.startsWith('-') ? prevInput.slice(1) : `-${prevInput}`
      );
    } else if (value === 'X') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h2>CALCULATOR</h2>
      <div className="display">
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('X')}>X</button>
          <button onClick={() => handleButtonClick('±')}>+/-</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
