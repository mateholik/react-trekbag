import React from 'react';

export default function Counter({ packedItemsAmount, allItemsAmount }) {
  return (
    <p>
      <b>{packedItemsAmount}</b> /{allItemsAmount} items packed
    </p>
  );
}
