import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsContext } from '../lib/hooks';

export default function Sidebar() {
  const {
    handleAddItem,
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
  } = useItemsContext();
  return (
    <aside className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsInComplete={handleMarkAllAsInComplete}
      />
    </aside>
  );
}
