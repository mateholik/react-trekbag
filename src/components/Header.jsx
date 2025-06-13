import Counter from './Counter';
import Logo from './Logo';
import { useItemsContext } from '../lib/hooks';

export default function Header() {
  const { allItemsAmount, packedItemsAmount } = useItemsContext();

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
