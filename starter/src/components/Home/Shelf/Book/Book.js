import React from "react";
import { PropTypes } from "prop-types";
import BookShelfSelector from "./bookShelfSelector/BookShelfSelector";

const Book = ({ book, setBookToShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks && `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <BookShelfSelector
              setBookToShelf={setBookToShelf}
              book={book}
            />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  setBookToShelf: PropTypes.func.isRequired,
};
export default Book;
