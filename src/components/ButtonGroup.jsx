import Button from './Button';

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) {
  return (
    <section className='button-group'>
      <Button theme='secondary' onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button theme='secondary' onClick={handleMarkAllAsInComplete}>
        Mark all as incomplete
      </Button>
      <Button theme='secondary' onClick={handleResetToInitial}>
        Reset to initiale
      </Button>
      <Button onClick={handleRemoveAllItems} theme='secondary'>
        Remove all items
      </Button>
    </section>
  );
}
