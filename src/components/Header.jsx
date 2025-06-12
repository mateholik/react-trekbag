import Counter from './Counter';
import Logo from './Logo';

export default function Header({ allItemsAmount, packedItemsAmount }) {
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
