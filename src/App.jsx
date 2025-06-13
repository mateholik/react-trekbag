import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import ItemsContextProvider from './context/ItemsContextProvider';

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <Sidebar />
          <ItemList />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}
