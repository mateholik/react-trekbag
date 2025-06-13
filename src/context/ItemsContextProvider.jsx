import { useState } from 'react';
import { initialItems } from '../lib/constants';
import { createContext } from 'react';
import { useEffect } from 'react';

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

  const allItemsAmount = items.length;
  const packedItemsAmount = items.filter((item) => item.packed).length;

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: Date.now(),
      text: newItemText.trim(),
      packed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      packed: true,
    }));
    setItems(updatedItems);
  };

  const handleMarkAllAsInComplete = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      packed: false,
    }));
    setItems(updatedItems);
  };

  const handleDeleteById = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItemPacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        allItemsAmount,
        packedItemsAmount,
        handleAddItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
        handleDeleteById,
        handleToggleItemPacked,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
