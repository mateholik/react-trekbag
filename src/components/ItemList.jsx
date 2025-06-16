import { useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { sortingOptions } from '../lib/constants';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useItemsStore } from '../stores/itemsStore';

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItemPacked = useItemsStore((state) => state.toggleItemPacked);

  const [sortBy, setSortBy] = useState(
    () => JSON.parse(localStorage.getItem('sortBy')) || sortingOptions[0]
  );

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy.value === 'packed') {
          return b.packed - a.packed; // Sort packed items first
        } else if (sortBy.value === 'unpacked') {
          return a.packed - b.packed; // Sort unpacked items first
        }
        return;
      }),
    [items, sortBy]
  );

  useEffect(() => {
    localStorage.setItem('sortBy', JSON.stringify(sortBy));
  }, [sortBy]);

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className='sorting'>
          <Select
            defaultValue={sortBy}
            onChange={(option) => setSortBy(option)}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          onToggleItem={toggleItemPacked}
          onDeleteItem={deleteItem}
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
