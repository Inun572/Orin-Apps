import { Link } from 'react-router-dom';
import { books } from '@/constants/Books';
import { PiBookmarkSimple, PiShoppingCartSimple } from 'react-icons/pi';
import { useDocumentTitle } from '@/hooks/customHooks';

const BookList = () => {
  useDocumentTitle('Book List | My BookApps');
  return (
    <>
      <h1 className="text-3xl p-8">Book List!</h1>
      <div className="w-full py-4 px-12 flex flex-wrap gap-4 overflow-scroll">
        {books.map((book) => (
          <Link className="" key={book.id} to={`/bookapps/books/${book.id}`}>
            <div className="card card-compact w-[240px] h-[540px] bg-base-300 shadow-xl">
              <figure>
                <img
                  src={book.image}
                  alt="https://placehold.jp/240x400.png"
                  className="min-h-[300px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <p>Author : {book.author}</p>
                <p>Year : {book.year}</p>
                <p>{book.description}</p>
                <div className="card-actions items-center justify-center">
                  <button className="btn btn-info">
                    <PiBookmarkSimple />
                    Wishlist
                  </button>
                  <button className="btn btn-success">
                    <PiShoppingCartSimple />
                    Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BookList;
