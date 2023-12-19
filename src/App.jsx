import { useContext, useEffect } from 'react';
import Layout from './components/layout';
import Router from './Router';

import { BooksContext } from './store/BooksContext';
import { useLocalStorage } from './hooks/customHooks';

export default function App() {
  const books = useContext(BooksContext);
  const [storedBooks, setStoredBooks] = useLocalStorage('books', books);

  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  return (
    <BooksContext.Provider value={storedBooks}>
      <Layout>
        <Router />
      </Layout>
    </BooksContext.Provider>
  );
}
