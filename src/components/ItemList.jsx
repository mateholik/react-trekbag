import { useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';

const sortingOptions = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' },
];

export default function ItemList({
  items,
  handleDeleteById,
  handleToggleItemPacked,
}) {
  const [sortBy, setSortBy] = useState('default');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed; // Sort packed items first
    } else if (sortBy === 'unpacked') {
      return a.packed - b.packed; // Sort unpacked items first
    }
    return;
  });

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className='sorting'>
          <Select
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          onToggleItem={handleToggleItemPacked}
          onDeleteItem={handleDeleteById}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          type='checkbox'
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
        />
        {item.text}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
