import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { useRef } from 'react';

export default function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please enter a valid item.');
      inputRef.current.focus();
      return;
    }

    onAddItem(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <Button> Add to list</Button>
    </form>
  );
}
