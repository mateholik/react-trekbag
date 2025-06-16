import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsStore } from '../stores/itemsStore';

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  return (
    <aside className='sidebar'>
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup
        handleRemoveAllItems={removeAllItems}
        handleResetToInitial={resetToInitial}
        handleMarkAllAsComplete={markAllAsComplete}
        handleMarkAllAsInComplete={markAllAsInComplete}
      />
    </aside>
  );
}
