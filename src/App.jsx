import { useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import { initialItems } from './lib/constants';

export default function App() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          handleDeleteById={handleDeleteById}
          items={items}
          handleToggleItemPacked={handleToggleItemPacked}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        />
      </main>
      <Footer />
    </>
  );
}
