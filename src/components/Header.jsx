import Counter from './Counter';
import Logo from './Logo';
import { useItemsStore } from '../stores/itemsStore';

export default function Header() {
  const allItemsAmount = useItemsStore((state) => state.items.length);
  const packedItemsAmount = useItemsStore(
    (state) => state.items.filter((item) => item.packed).length
  );

  return (
    <header>
      <Logo />
      <Counter
        allItemsAmount={allItemsAmount}
        packedItemsAmount={packedItemsAmount}
      />
    </header>
  );
}
