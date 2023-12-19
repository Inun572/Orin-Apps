import { useParams } from 'react-router-dom';
import { books } from '@/constants/Books';
import { useDocumentTitle } from '@/hooks/customHooks';

const BookDetails = () => {
  const { bookId } = useParams();
  const bookDetails = books.filter((book) => book.id === Number(bookId));
  useDocumentTitle('Book Details | My BookApps');
  return (
    <>
      <h1 className="text-3xl p-8">Book Details</h1>
      <div className="w-full py-4 px-12">
        {bookDetails.length > 0 && (
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={bookDetails[0].image}
                alt="https://placehold.co/400/png"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{bookDetails[0].name}</h2>
              <p>Author : {bookDetails[0].author}</p>
              <p>Year : {bookDetails[0].year}</p>
              <p>Genre : {bookDetails[0].genre}</p>
              <p>Rating : {bookDetails[0].rating}</p>
              <p>
                Price :{' '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(bookDetails[0].price)}
                .
              </p>
              <p>{bookDetails[0].description}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-info">Add to Wishlist</button>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookDetails;
