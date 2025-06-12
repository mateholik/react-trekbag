import React from 'react';

export default function Button({ children, theme, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${
        (theme, onClick === 'secondary' ? 'btn--secondary' : '')
      }`}
    >
      {children}
    </button>
  );
}
