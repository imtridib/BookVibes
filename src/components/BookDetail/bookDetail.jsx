import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";
import { addToWishList } from "../../utility/addToDB";
const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    tags,
    category,
  } = book;

  const handleMarkAsRead = (id) => {
    /**
     * 1. Understand what to store or save: => bookId
     * 2. Where to store: database
     * 3. array, list, collection
     * 4. check:if the book id already in the readList.
     * 5. if not, then add the book id to the readList.
     * 6. if yes, do not add the book
     */
    addToStoredReadList(id);
  };

  const handleAddToWishlist = (id) => {
    addToWishList(id);
  }

  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36" src={image} alt={bookName} />
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Mark as Read
      </button>
      <button onClick={() => handleAddToWishlist(bookId)} className="btn btn-accent">Add to Wishlist</button>
    </div>
  );
};
export default BookDetail;
