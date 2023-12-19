import { Link } from 'react-router-dom';
import { PiBookmarkSimple, PiShoppingCartSimple } from 'react-icons/pi';
import { useDocumentTitle } from '@/hooks/customHooks';
import { useContext } from 'react';
import { BooksContext } from '../../store/BooksContext';
import { useLocalStorage } from '../../hooks/customHooks';

const BookList = () => {
  useDocumentTitle('Book List | My BookApps');
  const storedBooks = useContext(BooksContext);
  const [books, setBooks] = useLocalStorage('books', storedBooks);

  const onCartToggle = (e) => {
    const updatedBooks = books.map((book) => {
      if (book.id === Number(e.target.name)) {
        book.isInCart = !book.isInCart;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const onWishToggle = (e) => {
    const updatedBooks = books.map((book) => {
      if (book.id === Number(e.target.name)) {
        book.isInWishist = !book.isInWishlist;
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <>
      <h1 className="text-3xl p-8">Book List</h1>
      <div className="w-full py-4 px-12 flex flex-wrap gap-4 overflow-scroll">
        {books.map((book) => (
          <div
            key={book.id}
            className="card card-compact w-[240px] h-[600px] bg-base-300 shadow-xl items-stretch"
          >
            <figure className="w-full h-[360px]">
              <img
                src={book.image}
                alt={'https://placehold.jp/240x360.png'}
                className="min-h-[300px] rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <Link className="" to={`/bookapps/books/${book.id}`}>
                <h2 className="card-title">{book.name}</h2>
              </Link>
              <p>Author : {book.author}</p>
              <p>Year : {book.year}</p>
              <p>{book.description}</p>
              <div className="card-actions items-center justify-center">
                <button
                  name={book.id}
                  onClick={onWishToggle}
                  className="btn btn-info"
                >
                  <PiBookmarkSimple />
                  Wishlist
                </button>
                <button
                  name={book.id}
                  onClick={onCartToggle}
                  className="btn btn-success"
                >
                  <PiShoppingCartSimple />
                  Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
