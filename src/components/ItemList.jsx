import EmptyView from './EmptyView';

export default function ItemList({
  items,
  handleDeleteById,
  handleToggleItemPacked,
}) {
  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
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
